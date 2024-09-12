let input = document.querySelector(".input");
let fetchedResult;

input.addEventListener("keyup", debounce(async function (event) {
    let repoItem;
    let repoWrapper = document.querySelector(".repo-wrapper");

    if (event.target.value === "") {
      repoWrapper.innerHTML = "";
      return;
    }

    try {
      let response = await fetch(`https://api.github.com/search/repositories?q=${event.target.value}`);

      if (response.ok) {
        let result = await response.json();
        fetchedResult = result.items;
      };
    } catch (err) {
      alert("Что-то пошло не так: " + err.message);
    }

    repoWrapper.innerHTML = "";

    let count = 0;
    for (let repo of fetchedResult) {
      if (count < 5) {
        console.log(repo.name);
        repoItem = document.createElement("li");
        repoItem.classList.add("repo-item");
        repoItem.textContent = repo.name;
        repoWrapper.append(repoItem);
        console.log(repoItem);

        count++;
      }
    }
  }, 600)
);

function debounce(fn, debounceTime) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, debounceTime);
  };
}

let repoWrapper = document.querySelector(".repo-wrapper");
let clone;
let contentDiv = document.querySelector(".repo-container");

function cloneReady() {
  return new Promise((resolve) => {
    repoWrapper.addEventListener("click", function (event) {
      let repoName = event.target.textContent;

      let repoTemplate = document.getElementById("repo-template").content;
      let templateName = repoTemplate.querySelector(".info-name");
      let templateOwner = repoTemplate.querySelector(".info-owner");
      let templateStars = repoTemplate.querySelector(".info-stars");

      let repo = fetchedResult.find((repo) => repo.name === repoName);

      templateName.textContent = repoName;
      templateOwner.textContent = repo.owner.login;
      templateStars.textContent = repo.stargazers_count;

      clone = repoTemplate.cloneNode(true);
      contentDiv.append(clone);

      input.value = "";
      repoWrapper.innerHTML = "";

      resolve(contentDiv);
    });
  });
}

cloneReady().then((contentDiv) => {
    
    contentDiv.addEventListener('click', function (event) {
        let deleteButton = event.target.closest('.delete-button');
        let repoItem = event.target.closest('.repo-added-wrapper');

        if (deleteButton) {
            repoItem.remove();
        }

    });
});