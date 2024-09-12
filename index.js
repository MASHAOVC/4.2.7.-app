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






// async function loadRepositories(search) {
//   // fetchedResult = await fetch(`https://api.github.com/search/repositories?q=${search}`);
//   // return fetchedResult;

//   return getMockResult().items;
// }














function getMockResult() {
  return {
    total_count: 821426,
    incomplete_results: false,
    items: [
      {
        id: 1449773,
        node_id: "MDEwOlJlcG9zaXRvcnkxNDQ5Nzcz",
        name: "red",
        full_name: "red/red",
        private: false,
        owner: {
          login: "red",
          id: 4625645,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjQ2MjU2NDU=",
          avatar_url: "https://avatars.githubusercontent.com/u/4625645?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/red",
          html_url: "https://github.com/red",
          followers_url: "https://api.github.com/users/red/followers",
          following_url:
            "https://api.github.com/users/red/following{/other_user}",
          gists_url: "https://api.github.com/users/red/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/red/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/red/subscriptions",
          organizations_url: "https://api.github.com/users/red/orgs",
          repos_url: "https://api.github.com/users/red/repos",
          events_url: "https://api.github.com/users/red/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/red/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/red/red",
        description:
          "Red is a next-generation programming language strongly inspired by Rebol, but with a broader field of usage thanks to its native-code compiler, from system programming to high-level scripting and cross-platform reactive GUI, while providing modern support for concurrency, all in a zero-install, zero-config, single ~1MB file! ",
        fork: false,
        url: "https://api.github.com/repos/red/red",
        forks_url: "https://api.github.com/repos/red/red/forks",
        keys_url: "https://api.github.com/repos/red/red/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/red/red/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/red/red/teams",
        hooks_url: "https://api.github.com/repos/red/red/hooks",
        issue_events_url:
          "https://api.github.com/repos/red/red/issues/events{/number}",
        events_url: "https://api.github.com/repos/red/red/events",
        assignees_url: "https://api.github.com/repos/red/red/assignees{/user}",
        branches_url: "https://api.github.com/repos/red/red/branches{/branch}",
        tags_url: "https://api.github.com/repos/red/red/tags",
        blobs_url: "https://api.github.com/repos/red/red/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/red/red/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/red/red/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/red/red/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/red/red/statuses/{sha}",
        languages_url: "https://api.github.com/repos/red/red/languages",
        stargazers_url: "https://api.github.com/repos/red/red/stargazers",
        contributors_url: "https://api.github.com/repos/red/red/contributors",
        subscribers_url: "https://api.github.com/repos/red/red/subscribers",
        subscription_url: "https://api.github.com/repos/red/red/subscription",
        commits_url: "https://api.github.com/repos/red/red/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/red/red/git/commits{/sha}",
        comments_url: "https://api.github.com/repos/red/red/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/red/red/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/red/red/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/red/red/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/red/red/merges",
        archive_url:
          "https://api.github.com/repos/red/red/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/red/red/downloads",
        issues_url: "https://api.github.com/repos/red/red/issues{/number}",
        pulls_url: "https://api.github.com/repos/red/red/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/red/red/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/red/red/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/red/red/labels{/name}",
        releases_url: "https://api.github.com/repos/red/red/releases{/id}",
        deployments_url: "https://api.github.com/repos/red/red/deployments",
        created_at: "2011-03-07T11:38:19Z",
        updated_at: "2024-09-10T08:51:23Z",
        pushed_at: "2024-09-06T10:31:17Z",
        git_url: "git://github.com/red/red.git",
        ssh_url: "git@github.com:red/red.git",
        clone_url: "https://github.com/red/red.git",
        svn_url: "https://github.com/red/red",
        homepage: "http://red-lang.org",
        size: 38646,
        stargazers_count: 5499,
        watchers_count: 5499,
        language: "Red",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: true,
        forks_count: 412,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 518,
        license: {
          key: "bsl-1.0",
          name: "Boost Software License 1.0",
          spdx_id: "BSL-1.0",
          url: "https://api.github.com/licenses/bsl-1.0",
          node_id: "MDc6TGljZW5zZTI4",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "compiler",
          "cross-platform",
          "gui",
          "interpreter",
          "language",
          "native",
          "programming-language",
          "reactive-programming",
          "rebol",
          "red",
          "repl",
          "scripting-language",
          "toolchain",
        ],
        visibility: "public",
        forks: 412,
        open_issues: 518,
        watchers: 5499,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 12618379,
        node_id: "MDEwOlJlcG9zaXRvcnkxMjYxODM3OQ==",
        name: "node-red",
        full_name: "node-red/node-red",
        private: false,
        owner: {
          login: "node-red",
          id: 5375661,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjUzNzU2NjE=",
          avatar_url: "https://avatars.githubusercontent.com/u/5375661?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/node-red",
          html_url: "https://github.com/node-red",
          followers_url: "https://api.github.com/users/node-red/followers",
          following_url:
            "https://api.github.com/users/node-red/following{/other_user}",
          gists_url: "https://api.github.com/users/node-red/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/node-red/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/node-red/subscriptions",
          organizations_url: "https://api.github.com/users/node-red/orgs",
          repos_url: "https://api.github.com/users/node-red/repos",
          events_url: "https://api.github.com/users/node-red/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/node-red/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/node-red/node-red",
        description: "Low-code programming for event-driven applications",
        fork: false,
        url: "https://api.github.com/repos/node-red/node-red",
        forks_url: "https://api.github.com/repos/node-red/node-red/forks",
        keys_url:
          "https://api.github.com/repos/node-red/node-red/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/node-red/node-red/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/node-red/node-red/teams",
        hooks_url: "https://api.github.com/repos/node-red/node-red/hooks",
        issue_events_url:
          "https://api.github.com/repos/node-red/node-red/issues/events{/number}",
        events_url: "https://api.github.com/repos/node-red/node-red/events",
        assignees_url:
          "https://api.github.com/repos/node-red/node-red/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/node-red/node-red/branches{/branch}",
        tags_url: "https://api.github.com/repos/node-red/node-red/tags",
        blobs_url:
          "https://api.github.com/repos/node-red/node-red/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/node-red/node-red/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/node-red/node-red/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/node-red/node-red/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/node-red/node-red/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/node-red/node-red/languages",
        stargazers_url:
          "https://api.github.com/repos/node-red/node-red/stargazers",
        contributors_url:
          "https://api.github.com/repos/node-red/node-red/contributors",
        subscribers_url:
          "https://api.github.com/repos/node-red/node-red/subscribers",
        subscription_url:
          "https://api.github.com/repos/node-red/node-red/subscription",
        commits_url:
          "https://api.github.com/repos/node-red/node-red/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/node-red/node-red/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/node-red/node-red/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/node-red/node-red/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/node-red/node-red/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/node-red/node-red/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/node-red/node-red/merges",
        archive_url:
          "https://api.github.com/repos/node-red/node-red/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/node-red/node-red/downloads",
        issues_url:
          "https://api.github.com/repos/node-red/node-red/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/node-red/node-red/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/node-red/node-red/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/node-red/node-red/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/node-red/node-red/labels{/name}",
        releases_url:
          "https://api.github.com/repos/node-red/node-red/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/node-red/node-red/deployments",
        created_at: "2013-09-05T13:30:47Z",
        updated_at: "2024-09-10T12:24:17Z",
        pushed_at: "2024-09-09T15:53:01Z",
        git_url: "git://github.com/node-red/node-red.git",
        ssh_url: "git@github.com:node-red/node-red.git",
        clone_url: "https://github.com/node-red/node-red.git",
        svn_url: "https://github.com/node-red/node-red",
        homepage: "http://nodered.org",
        size: 55054,
        stargazers_count: 19472,
        watchers_count: 19472,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 3369,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 400,
        license: {
          key: "apache-2.0",
          name: "Apache License 2.0",
          spdx_id: "Apache-2.0",
          url: "https://api.github.com/licenses/apache-2.0",
          node_id: "MDc6TGljZW5zZTI=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "flow-based-programming",
          "javascript",
          "low-code",
          "node-red",
          "openjs-foundation",
          "visual-programming",
        ],
        visibility: "public",
        forks: 3369,
        open_issues: 400,
        watchers: 19472,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 156018,
        node_id: "MDEwOlJlcG9zaXRvcnkxNTYwMTg=",
        name: "redis",
        full_name: "redis/redis",
        private: false,
        owner: {
          login: "redis",
          id: 1529926,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjE1Mjk5MjY=",
          avatar_url: "https://avatars.githubusercontent.com/u/1529926?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/redis",
          html_url: "https://github.com/redis",
          followers_url: "https://api.github.com/users/redis/followers",
          following_url:
            "https://api.github.com/users/redis/following{/other_user}",
          gists_url: "https://api.github.com/users/redis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/redis/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/redis/subscriptions",
          organizations_url: "https://api.github.com/users/redis/orgs",
          repos_url: "https://api.github.com/users/redis/repos",
          events_url: "https://api.github.com/users/redis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/redis/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/redis/redis",
        description:
          "Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, Streams, HyperLogLogs, Bitmaps.",
        fork: false,
        url: "https://api.github.com/repos/redis/redis",
        forks_url: "https://api.github.com/repos/redis/redis/forks",
        keys_url: "https://api.github.com/repos/redis/redis/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/redis/redis/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/redis/redis/teams",
        hooks_url: "https://api.github.com/repos/redis/redis/hooks",
        issue_events_url:
          "https://api.github.com/repos/redis/redis/issues/events{/number}",
        events_url: "https://api.github.com/repos/redis/redis/events",
        assignees_url:
          "https://api.github.com/repos/redis/redis/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/redis/redis/branches{/branch}",
        tags_url: "https://api.github.com/repos/redis/redis/tags",
        blobs_url: "https://api.github.com/repos/redis/redis/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/redis/redis/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/redis/redis/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/redis/redis/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/redis/redis/statuses/{sha}",
        languages_url: "https://api.github.com/repos/redis/redis/languages",
        stargazers_url: "https://api.github.com/repos/redis/redis/stargazers",
        contributors_url:
          "https://api.github.com/repos/redis/redis/contributors",
        subscribers_url: "https://api.github.com/repos/redis/redis/subscribers",
        subscription_url:
          "https://api.github.com/repos/redis/redis/subscription",
        commits_url: "https://api.github.com/repos/redis/redis/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/redis/redis/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/redis/redis/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/redis/redis/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/redis/redis/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/redis/redis/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/redis/redis/merges",
        archive_url:
          "https://api.github.com/repos/redis/redis/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/redis/redis/downloads",
        issues_url: "https://api.github.com/repos/redis/redis/issues{/number}",
        pulls_url: "https://api.github.com/repos/redis/redis/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/redis/redis/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/redis/redis/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/redis/redis/labels{/name}",
        releases_url: "https://api.github.com/repos/redis/redis/releases{/id}",
        deployments_url: "https://api.github.com/repos/redis/redis/deployments",
        created_at: "2009-03-21T22:32:25Z",
        updated_at: "2024-09-10T13:24:28Z",
        pushed_at: "2024-09-10T12:26:36Z",
        git_url: "git://github.com/redis/redis.git",
        ssh_url: "git@github.com:redis/redis.git",
        clone_url: "https://github.com/redis/redis.git",
        svn_url: "https://github.com/redis/redis",
        homepage: "http://redis.io",
        size: 140648,
        stargazers_count: 66277,
        watchers_count: 66277,
        language: "C",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 23708,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2497,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "cache",
          "database",
          "key-value",
          "message-broker",
          "nosql",
          "redis",
        ],
        visibility: "public",
        forks: 23708,
        open_issues: 2497,
        watchers: 66277,
        default_branch: "unstable",
        score: 1.0,
      },
      {
        id: 44308560,
        node_id: "MDEwOlJlcG9zaXRvcnk0NDMwODU2MA==",
        name: "RED",
        full_name: "nokia/RED",
        private: false,
        owner: {
          login: "nokia",
          id: 341053,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjM0MTA1Mw==",
          avatar_url: "https://avatars.githubusercontent.com/u/341053?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nokia",
          html_url: "https://github.com/nokia",
          followers_url: "https://api.github.com/users/nokia/followers",
          following_url:
            "https://api.github.com/users/nokia/following{/other_user}",
          gists_url: "https://api.github.com/users/nokia/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nokia/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/nokia/subscriptions",
          organizations_url: "https://api.github.com/users/nokia/orgs",
          repos_url: "https://api.github.com/users/nokia/repos",
          events_url: "https://api.github.com/users/nokia/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nokia/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/nokia/RED",
        description: "RED - Robot Editor",
        fork: false,
        url: "https://api.github.com/repos/nokia/RED",
        forks_url: "https://api.github.com/repos/nokia/RED/forks",
        keys_url: "https://api.github.com/repos/nokia/RED/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/nokia/RED/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/nokia/RED/teams",
        hooks_url: "https://api.github.com/repos/nokia/RED/hooks",
        issue_events_url:
          "https://api.github.com/repos/nokia/RED/issues/events{/number}",
        events_url: "https://api.github.com/repos/nokia/RED/events",
        assignees_url:
          "https://api.github.com/repos/nokia/RED/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/nokia/RED/branches{/branch}",
        tags_url: "https://api.github.com/repos/nokia/RED/tags",
        blobs_url: "https://api.github.com/repos/nokia/RED/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/nokia/RED/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/nokia/RED/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/nokia/RED/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/nokia/RED/statuses/{sha}",
        languages_url: "https://api.github.com/repos/nokia/RED/languages",
        stargazers_url: "https://api.github.com/repos/nokia/RED/stargazers",
        contributors_url: "https://api.github.com/repos/nokia/RED/contributors",
        subscribers_url: "https://api.github.com/repos/nokia/RED/subscribers",
        subscription_url: "https://api.github.com/repos/nokia/RED/subscription",
        commits_url: "https://api.github.com/repos/nokia/RED/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/nokia/RED/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/nokia/RED/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/nokia/RED/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/nokia/RED/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/nokia/RED/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/nokia/RED/merges",
        archive_url:
          "https://api.github.com/repos/nokia/RED/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/nokia/RED/downloads",
        issues_url: "https://api.github.com/repos/nokia/RED/issues{/number}",
        pulls_url: "https://api.github.com/repos/nokia/RED/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/nokia/RED/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/nokia/RED/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/nokia/RED/labels{/name}",
        releases_url: "https://api.github.com/repos/nokia/RED/releases{/id}",
        deployments_url: "https://api.github.com/repos/nokia/RED/deployments",
        created_at: "2015-10-15T09:48:01Z",
        updated_at: "2024-08-22T11:59:34Z",
        pushed_at: "2023-06-12T12:13:02Z",
        git_url: "git://github.com/nokia/RED.git",
        ssh_url: "git@github.com:nokia/RED.git",
        clone_url: "https://github.com/nokia/RED.git",
        svn_url: "https://github.com/nokia/RED",
        homepage: null,
        size: 140254,
        stargazers_count: 339,
        watchers_count: 339,
        language: "Java",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: true,
        has_discussions: false,
        forks_count: 112,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 60,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "eclipse",
          "red",
          "robot",
          "robot-editor",
          "robotframework",
          "robotframework-ide",
          "robotframework-syntax-highlighter",
          "robotframework-testing",
          "testcase",
        ],
        visibility: "public",
        forks: 112,
        open_issues: 60,
        watchers: 339,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 36535156,
        node_id: "MDEwOlJlcG9zaXRvcnkzNjUzNTE1Ng==",
        name: "redux",
        full_name: "reduxjs/redux",
        private: false,
        owner: {
          login: "reduxjs",
          id: 13142323,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjEzMTQyMzIz",
          avatar_url: "https://avatars.githubusercontent.com/u/13142323?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/reduxjs",
          html_url: "https://github.com/reduxjs",
          followers_url: "https://api.github.com/users/reduxjs/followers",
          following_url:
            "https://api.github.com/users/reduxjs/following{/other_user}",
          gists_url: "https://api.github.com/users/reduxjs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/reduxjs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/reduxjs/subscriptions",
          organizations_url: "https://api.github.com/users/reduxjs/orgs",
          repos_url: "https://api.github.com/users/reduxjs/repos",
          events_url: "https://api.github.com/users/reduxjs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/reduxjs/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/reduxjs/redux",
        description: "A JS library for predictable global state management",
        fork: false,
        url: "https://api.github.com/repos/reduxjs/redux",
        forks_url: "https://api.github.com/repos/reduxjs/redux/forks",
        keys_url: "https://api.github.com/repos/reduxjs/redux/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/reduxjs/redux/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/reduxjs/redux/teams",
        hooks_url: "https://api.github.com/repos/reduxjs/redux/hooks",
        issue_events_url:
          "https://api.github.com/repos/reduxjs/redux/issues/events{/number}",
        events_url: "https://api.github.com/repos/reduxjs/redux/events",
        assignees_url:
          "https://api.github.com/repos/reduxjs/redux/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/reduxjs/redux/branches{/branch}",
        tags_url: "https://api.github.com/repos/reduxjs/redux/tags",
        blobs_url: "https://api.github.com/repos/reduxjs/redux/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/reduxjs/redux/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/reduxjs/redux/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/reduxjs/redux/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/reduxjs/redux/statuses/{sha}",
        languages_url: "https://api.github.com/repos/reduxjs/redux/languages",
        stargazers_url: "https://api.github.com/repos/reduxjs/redux/stargazers",
        contributors_url:
          "https://api.github.com/repos/reduxjs/redux/contributors",
        subscribers_url:
          "https://api.github.com/repos/reduxjs/redux/subscribers",
        subscription_url:
          "https://api.github.com/repos/reduxjs/redux/subscription",
        commits_url: "https://api.github.com/repos/reduxjs/redux/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/reduxjs/redux/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/reduxjs/redux/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/reduxjs/redux/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/reduxjs/redux/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/reduxjs/redux/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/reduxjs/redux/merges",
        archive_url:
          "https://api.github.com/repos/reduxjs/redux/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/reduxjs/redux/downloads",
        issues_url:
          "https://api.github.com/repos/reduxjs/redux/issues{/number}",
        pulls_url: "https://api.github.com/repos/reduxjs/redux/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/reduxjs/redux/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/reduxjs/redux/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/reduxjs/redux/labels{/name}",
        releases_url:
          "https://api.github.com/repos/reduxjs/redux/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/reduxjs/redux/deployments",
        created_at: "2015-05-29T23:53:15Z",
        updated_at: "2024-09-10T10:29:04Z",
        pushed_at: "2024-08-29T15:47:32Z",
        git_url: "git://github.com/reduxjs/redux.git",
        ssh_url: "git@github.com:reduxjs/redux.git",
        clone_url: "https://github.com/reduxjs/redux.git",
        svn_url: "https://github.com/reduxjs/redux",
        homepage: "https://redux.js.org",
        size: 32562,
        stargazers_count: 60794,
        watchers_count: 60794,
        language: "TypeScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: true,
        has_discussions: true,
        forks_count: 15266,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 39,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["redux"],
        visibility: "public",
        forks: 15266,
        open_issues: 39,
        watchers: 60794,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 176564343,
        node_id: "MDEwOlJlcG9zaXRvcnkxNzY1NjQzNDM=",
        name: "red",
        full_name: "webpod/red",
        private: false,
        owner: {
          login: "webpod",
          id: 121774976,
          node_id: "O_kgDOB0IjgA",
          avatar_url: "https://avatars.githubusercontent.com/u/121774976?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/webpod",
          html_url: "https://github.com/webpod",
          followers_url: "https://api.github.com/users/webpod/followers",
          following_url:
            "https://api.github.com/users/webpod/following{/other_user}",
          gists_url: "https://api.github.com/users/webpod/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/webpod/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/webpod/subscriptions",
          organizations_url: "https://api.github.com/users/webpod/orgs",
          repos_url: "https://api.github.com/users/webpod/repos",
          events_url: "https://api.github.com/users/webpod/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/webpod/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/webpod/red",
        description: "Security log analysis tools for server monitoring",
        fork: false,
        url: "https://api.github.com/repos/webpod/red",
        forks_url: "https://api.github.com/repos/webpod/red/forks",
        keys_url: "https://api.github.com/repos/webpod/red/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/webpod/red/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/webpod/red/teams",
        hooks_url: "https://api.github.com/repos/webpod/red/hooks",
        issue_events_url:
          "https://api.github.com/repos/webpod/red/issues/events{/number}",
        events_url: "https://api.github.com/repos/webpod/red/events",
        assignees_url:
          "https://api.github.com/repos/webpod/red/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/webpod/red/branches{/branch}",
        tags_url: "https://api.github.com/repos/webpod/red/tags",
        blobs_url: "https://api.github.com/repos/webpod/red/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/webpod/red/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/webpod/red/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/webpod/red/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/webpod/red/statuses/{sha}",
        languages_url: "https://api.github.com/repos/webpod/red/languages",
        stargazers_url: "https://api.github.com/repos/webpod/red/stargazers",
        contributors_url:
          "https://api.github.com/repos/webpod/red/contributors",
        subscribers_url: "https://api.github.com/repos/webpod/red/subscribers",
        subscription_url:
          "https://api.github.com/repos/webpod/red/subscription",
        commits_url: "https://api.github.com/repos/webpod/red/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/webpod/red/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/webpod/red/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/webpod/red/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/webpod/red/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/webpod/red/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/webpod/red/merges",
        archive_url:
          "https://api.github.com/repos/webpod/red/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/webpod/red/downloads",
        issues_url: "https://api.github.com/repos/webpod/red/issues{/number}",
        pulls_url: "https://api.github.com/repos/webpod/red/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/webpod/red/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/webpod/red/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/webpod/red/labels{/name}",
        releases_url: "https://api.github.com/repos/webpod/red/releases{/id}",
        deployments_url: "https://api.github.com/repos/webpod/red/deployments",
        created_at: "2019-03-19T17:23:44Z",
        updated_at: "2024-09-05T11:09:41Z",
        pushed_at: "2024-06-14T06:49:33Z",
        git_url: "git://github.com/webpod/red.git",
        ssh_url: "git@github.com:webpod/red.git",
        clone_url: "https://github.com/webpod/red.git",
        svn_url: "https://github.com/webpod/red",
        homepage: "",
        size: 18,
        stargazers_count: 1472,
        watchers_count: 1472,
        language: "Go",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 50,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 50,
        open_issues: 0,
        watchers: 1472,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 11892946,
        node_id: "MDEwOlJlcG9zaXRvcnkxMTg5Mjk0Ng==",
        name: "RedisDesktopManager",
        full_name: "RedisInsight/RedisDesktopManager",
        private: false,
        owner: {
          login: "RedisInsight",
          id: 87389211,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjg3Mzg5MjEx",
          avatar_url: "https://avatars.githubusercontent.com/u/87389211?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/RedisInsight",
          html_url: "https://github.com/RedisInsight",
          followers_url: "https://api.github.com/users/RedisInsight/followers",
          following_url:
            "https://api.github.com/users/RedisInsight/following{/other_user}",
          gists_url:
            "https://api.github.com/users/RedisInsight/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/RedisInsight/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/RedisInsight/subscriptions",
          organizations_url: "https://api.github.com/users/RedisInsight/orgs",
          repos_url: "https://api.github.com/users/RedisInsight/repos",
          events_url:
            "https://api.github.com/users/RedisInsight/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/RedisInsight/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/RedisInsight/RedisDesktopManager",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/RedisInsight/RedisDesktopManager",
        forks_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/forks",
        keys_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/teams",
        hooks_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/hooks",
        issue_events_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/events",
        assignees_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/tags",
        blobs_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/languages",
        stargazers_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/stargazers",
        contributors_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/contributors",
        subscribers_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/subscribers",
        subscription_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/subscription",
        commits_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/merges",
        archive_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/downloads",
        issues_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/labels{/name}",
        releases_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/RedisInsight/RedisDesktopManager/deployments",
        created_at: "2013-08-05T07:51:08Z",
        updated_at: "2024-09-10T08:03:18Z",
        pushed_at: "2024-07-10T07:40:01Z",
        git_url: "git://github.com/RedisInsight/RedisDesktopManager.git",
        ssh_url: "git@github.com:RedisInsight/RedisDesktopManager.git",
        clone_url: "https://github.com/RedisInsight/RedisDesktopManager.git",
        svn_url: "https://github.com/RedisInsight/RedisDesktopManager",
        homepage: "https://resp.app",
        size: 78590,
        stargazers_count: 22884,
        watchers_count: 22884,
        language: "C++",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 3268,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 61,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 3268,
        open_issues: 61,
        watchers: 22884,
        default_branch: "2022",
        score: 1.0,
      },
      {
        id: 104987608,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDQ5ODc2MDg=",
        name: "Awesome-Red-Teaming",
        full_name: "yeyintminthuhtut/Awesome-Red-Teaming",
        private: false,
        owner: {
          login: "yeyintminthuhtut",
          id: 6358256,
          node_id: "MDQ6VXNlcjYzNTgyNTY=",
          avatar_url: "https://avatars.githubusercontent.com/u/6358256?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/yeyintminthuhtut",
          html_url: "https://github.com/yeyintminthuhtut",
          followers_url:
            "https://api.github.com/users/yeyintminthuhtut/followers",
          following_url:
            "https://api.github.com/users/yeyintminthuhtut/following{/other_user}",
          gists_url:
            "https://api.github.com/users/yeyintminthuhtut/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/yeyintminthuhtut/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/yeyintminthuhtut/subscriptions",
          organizations_url:
            "https://api.github.com/users/yeyintminthuhtut/orgs",
          repos_url: "https://api.github.com/users/yeyintminthuhtut/repos",
          events_url:
            "https://api.github.com/users/yeyintminthuhtut/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/yeyintminthuhtut/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/yeyintminthuhtut/Awesome-Red-Teaming",
        description: "List of Awesome Red Teaming Resources",
        fork: false,
        url: "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming",
        forks_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/forks",
        keys_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/teams",
        hooks_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/hooks",
        issue_events_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/events",
        assignees_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/tags",
        blobs_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/languages",
        stargazers_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/stargazers",
        contributors_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/contributors",
        subscribers_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/subscribers",
        subscription_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/subscription",
        commits_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/merges",
        archive_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/downloads",
        issues_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/labels{/name}",
        releases_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/yeyintminthuhtut/Awesome-Red-Teaming/deployments",
        created_at: "2017-09-27T07:39:15Z",
        updated_at: "2024-09-10T10:32:26Z",
        pushed_at: "2023-12-28T18:10:52Z",
        git_url: "git://github.com/yeyintminthuhtut/Awesome-Red-Teaming.git",
        ssh_url: "git@github.com:yeyintminthuhtut/Awesome-Red-Teaming.git",
        clone_url:
          "https://github.com/yeyintminthuhtut/Awesome-Red-Teaming.git",
        svn_url: "https://github.com/yeyintminthuhtut/Awesome-Red-Teaming",
        homepage: null,
        size: 205,
        stargazers_count: 6808,
        watchers_count: 6808,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 1659,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 12,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "cobalt-strike",
          "empire",
          "phishing",
          "redteam",
          "redteaming",
          "uac",
        ],
        visibility: "public",
        forks: 1659,
        open_issues: 12,
        watchers: 6808,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 173451832,
        node_id: "MDEwOlJlcG9zaXRvcnkxNzM0NTE4MzI=",
        name: "RedTeaming-Tactics-and-Techniques",
        full_name: "mantvydasb/RedTeaming-Tactics-and-Techniques",
        private: false,
        owner: {
          login: "mantvydasb",
          id: 5759727,
          node_id: "MDQ6VXNlcjU3NTk3Mjc=",
          avatar_url: "https://avatars.githubusercontent.com/u/5759727?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mantvydasb",
          html_url: "https://github.com/mantvydasb",
          followers_url: "https://api.github.com/users/mantvydasb/followers",
          following_url:
            "https://api.github.com/users/mantvydasb/following{/other_user}",
          gists_url: "https://api.github.com/users/mantvydasb/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mantvydasb/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mantvydasb/subscriptions",
          organizations_url: "https://api.github.com/users/mantvydasb/orgs",
          repos_url: "https://api.github.com/users/mantvydasb/repos",
          events_url:
            "https://api.github.com/users/mantvydasb/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mantvydasb/received_events",
          type: "User",
          site_admin: false,
        },
        html_url:
          "https://github.com/mantvydasb/RedTeaming-Tactics-and-Techniques",
        description: "Red Teaming Tactics and Techniques",
        fork: false,
        url: "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques",
        forks_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/forks",
        keys_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/teams",
        hooks_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/hooks",
        issue_events_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/events",
        assignees_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/tags",
        blobs_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/languages",
        stargazers_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/stargazers",
        contributors_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/contributors",
        subscribers_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/subscribers",
        subscription_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/subscription",
        commits_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/merges",
        archive_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/downloads",
        issues_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/labels{/name}",
        releases_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/mantvydasb/RedTeaming-Tactics-and-Techniques/deployments",
        created_at: "2019-03-02T13:33:33Z",
        updated_at: "2024-09-10T13:05:15Z",
        pushed_at: "2024-08-22T07:17:31Z",
        git_url:
          "git://github.com/mantvydasb/RedTeaming-Tactics-and-Techniques.git",
        ssh_url:
          "git@github.com:mantvydasb/RedTeaming-Tactics-and-Techniques.git",
        clone_url:
          "https://github.com/mantvydasb/RedTeaming-Tactics-and-Techniques.git",
        svn_url:
          "https://github.com/mantvydasb/RedTeaming-Tactics-and-Techniques",
        homepage: "http://ired.team",
        size: 360619,
        stargazers_count: 3974,
        watchers_count: 3974,
        language: "PowerShell",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 1039,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 20,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "offensive-security",
          "oscp",
          "pentesting",
          "redteam",
          "redteam-infrastructure",
          "redteaming",
        ],
        visibility: "public",
        forks: 1039,
        open_issues: 20,
        watchers: 3974,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 46890202,
        node_id: "MDEwOlJlcG9zaXRvcnk0Njg5MDIwMg==",
        name: "ReduxSimpleStarter",
        full_name: "StephenGrider/ReduxSimpleStarter",
        private: false,
        owner: {
          login: "StephenGrider",
          id: 5003903,
          node_id: "MDQ6VXNlcjUwMDM5MDM=",
          avatar_url: "https://avatars.githubusercontent.com/u/5003903?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/StephenGrider",
          html_url: "https://github.com/StephenGrider",
          followers_url: "https://api.github.com/users/StephenGrider/followers",
          following_url:
            "https://api.github.com/users/StephenGrider/following{/other_user}",
          gists_url:
            "https://api.github.com/users/StephenGrider/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/StephenGrider/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/StephenGrider/subscriptions",
          organizations_url: "https://api.github.com/users/StephenGrider/orgs",
          repos_url: "https://api.github.com/users/StephenGrider/repos",
          events_url:
            "https://api.github.com/users/StephenGrider/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/StephenGrider/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/StephenGrider/ReduxSimpleStarter",
        description: "Starter pack for an awesome Udemy course",
        fork: false,
        url: "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter",
        forks_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/forks",
        keys_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/teams",
        hooks_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/hooks",
        issue_events_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/events",
        assignees_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/tags",
        blobs_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/languages",
        stargazers_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/stargazers",
        contributors_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/contributors",
        subscribers_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/subscribers",
        subscription_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/subscription",
        commits_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/merges",
        archive_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/downloads",
        issues_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/labels{/name}",
        releases_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/StephenGrider/ReduxSimpleStarter/deployments",
        created_at: "2015-11-25T22:08:19Z",
        updated_at: "2024-09-04T15:06:50Z",
        pushed_at: "2024-01-28T18:25:38Z",
        git_url: "git://github.com/StephenGrider/ReduxSimpleStarter.git",
        ssh_url: "git@github.com:StephenGrider/ReduxSimpleStarter.git",
        clone_url: "https://github.com/StephenGrider/ReduxSimpleStarter.git",
        svn_url: "https://github.com/StephenGrider/ReduxSimpleStarter",
        homepage: "",
        size: 132,
        stargazers_count: 3557,
        watchers_count: 3557,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 4648,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 156,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 4648,
        open_issues: 156,
        watchers: 3557,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 11211886,
        node_id: "MDEwOlJlcG9zaXRvcnkxMTIxMTg4Ng==",
        name: "pokered",
        full_name: "pret/pokered",
        private: false,
        owner: {
          login: "pret",
          id: 10761592,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjEwNzYxNTky",
          avatar_url: "https://avatars.githubusercontent.com/u/10761592?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/pret",
          html_url: "https://github.com/pret",
          followers_url: "https://api.github.com/users/pret/followers",
          following_url:
            "https://api.github.com/users/pret/following{/other_user}",
          gists_url: "https://api.github.com/users/pret/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/pret/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/pret/subscriptions",
          organizations_url: "https://api.github.com/users/pret/orgs",
          repos_url: "https://api.github.com/users/pret/repos",
          events_url: "https://api.github.com/users/pret/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/pret/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/pret/pokered",
        description: "Disassembly of Pokémon Red/Blue",
        fork: false,
        url: "https://api.github.com/repos/pret/pokered",
        forks_url: "https://api.github.com/repos/pret/pokered/forks",
        keys_url: "https://api.github.com/repos/pret/pokered/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/pret/pokered/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/pret/pokered/teams",
        hooks_url: "https://api.github.com/repos/pret/pokered/hooks",
        issue_events_url:
          "https://api.github.com/repos/pret/pokered/issues/events{/number}",
        events_url: "https://api.github.com/repos/pret/pokered/events",
        assignees_url:
          "https://api.github.com/repos/pret/pokered/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/pret/pokered/branches{/branch}",
        tags_url: "https://api.github.com/repos/pret/pokered/tags",
        blobs_url: "https://api.github.com/repos/pret/pokered/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/pret/pokered/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/pret/pokered/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/pret/pokered/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/pret/pokered/statuses/{sha}",
        languages_url: "https://api.github.com/repos/pret/pokered/languages",
        stargazers_url: "https://api.github.com/repos/pret/pokered/stargazers",
        contributors_url:
          "https://api.github.com/repos/pret/pokered/contributors",
        subscribers_url:
          "https://api.github.com/repos/pret/pokered/subscribers",
        subscription_url:
          "https://api.github.com/repos/pret/pokered/subscription",
        commits_url: "https://api.github.com/repos/pret/pokered/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/pret/pokered/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/pret/pokered/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/pret/pokered/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/pret/pokered/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/pret/pokered/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/pret/pokered/merges",
        archive_url:
          "https://api.github.com/repos/pret/pokered/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/pret/pokered/downloads",
        issues_url: "https://api.github.com/repos/pret/pokered/issues{/number}",
        pulls_url: "https://api.github.com/repos/pret/pokered/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/pret/pokered/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/pret/pokered/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/pret/pokered/labels{/name}",
        releases_url: "https://api.github.com/repos/pret/pokered/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/pret/pokered/deployments",
        created_at: "2013-07-06T02:27:16Z",
        updated_at: "2024-09-10T00:23:05Z",
        pushed_at: "2024-09-10T00:22:58Z",
        git_url: "git://github.com/pret/pokered.git",
        ssh_url: "git@github.com:pret/pokered.git",
        clone_url: "https://github.com/pret/pokered.git",
        svn_url: "https://github.com/pret/pokered",
        homepage: "",
        size: 19765,
        stargazers_count: 3940,
        watchers_count: 3940,
        language: "Assembly",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 963,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 16,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "disassembly",
          "gameboy",
          "gbz80",
          "pokemon",
          "reverse-engineering",
        ],
        visibility: "public",
        forks: 963,
        open_issues: 16,
        watchers: 3940,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 500083400,
        node_id: "R_kgDOHc6qyA",
        name: "Red-Dragon",
        full_name: "prabhasha2006/Red-Dragon",
        private: false,
        owner: {
          login: "prabhasha2006",
          id: 102839813,
          node_id: "U_kgDOBiE2BQ",
          avatar_url: "https://avatars.githubusercontent.com/u/102839813?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/prabhasha2006",
          html_url: "https://github.com/prabhasha2006",
          followers_url: "https://api.github.com/users/prabhasha2006/followers",
          following_url:
            "https://api.github.com/users/prabhasha2006/following{/other_user}",
          gists_url:
            "https://api.github.com/users/prabhasha2006/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/prabhasha2006/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/prabhasha2006/subscriptions",
          organizations_url: "https://api.github.com/users/prabhasha2006/orgs",
          repos_url: "https://api.github.com/users/prabhasha2006/repos",
          events_url:
            "https://api.github.com/users/prabhasha2006/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/prabhasha2006/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/prabhasha2006/Red-Dragon",
        description: "Welcome To ☬𝗥𝗘𝗗༒𝗗𝗥𝗔𝗚𝗢𝗡-𝗕𝗢𝗧࿐",
        fork: false,
        url: "https://api.github.com/repos/prabhasha2006/Red-Dragon",
        forks_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/forks",
        keys_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/teams",
        hooks_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/hooks",
        issue_events_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/events",
        assignees_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/branches{/branch}",
        tags_url: "https://api.github.com/repos/prabhasha2006/Red-Dragon/tags",
        blobs_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/languages",
        stargazers_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/stargazers",
        contributors_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/contributors",
        subscribers_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/subscribers",
        subscription_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/subscription",
        commits_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/merges",
        archive_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/downloads",
        issues_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/labels{/name}",
        releases_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/prabhasha2006/Red-Dragon/deployments",
        created_at: "2022-06-05T11:52:10Z",
        updated_at: "2024-09-08T15:42:32Z",
        pushed_at: "2024-08-09T01:52:13Z",
        git_url: "git://github.com/prabhasha2006/Red-Dragon.git",
        ssh_url: "git@github.com:prabhasha2006/Red-Dragon.git",
        clone_url: "https://github.com/prabhasha2006/Red-Dragon.git",
        svn_url: "https://github.com/prabhasha2006/Red-Dragon",
        homepage: "",
        size: 81352,
        stargazers_count: 202,
        watchers_count: 202,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 4031,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 122,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 4031,
        open_issues: 122,
        watchers: 202,
        default_branch: "main",
        score: 1.0,
      },
      {
        id: 15823460,
        node_id: "MDEwOlJlcG9zaXRvcnkxNTgyMzQ2MA==",
        name: "redisson",
        full_name: "redisson/redisson",
        private: false,
        owner: {
          login: "redisson",
          id: 16851431,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjE2ODUxNDMx",
          avatar_url: "https://avatars.githubusercontent.com/u/16851431?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/redisson",
          html_url: "https://github.com/redisson",
          followers_url: "https://api.github.com/users/redisson/followers",
          following_url:
            "https://api.github.com/users/redisson/following{/other_user}",
          gists_url: "https://api.github.com/users/redisson/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/redisson/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/redisson/subscriptions",
          organizations_url: "https://api.github.com/users/redisson/orgs",
          repos_url: "https://api.github.com/users/redisson/repos",
          events_url: "https://api.github.com/users/redisson/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/redisson/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/redisson/redisson",
        description:
          "Redisson - Easy Redis Java client and Real-Time Data Platform. Valkey compatible. Sync/Async/RxJava/Reactive API. Over 50 Redis based Java objects and services: Set, Multimap, SortedSet, Map, List, Queue, Deque, Semaphore, Lock, AtomicLong, Map Reduce, Bloom filter, Spring Cache, Tomcat, Scheduler, JCache API, Hibernate, RPC, local cache ...",
        fork: false,
        url: "https://api.github.com/repos/redisson/redisson",
        forks_url: "https://api.github.com/repos/redisson/redisson/forks",
        keys_url:
          "https://api.github.com/repos/redisson/redisson/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/redisson/redisson/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/redisson/redisson/teams",
        hooks_url: "https://api.github.com/repos/redisson/redisson/hooks",
        issue_events_url:
          "https://api.github.com/repos/redisson/redisson/issues/events{/number}",
        events_url: "https://api.github.com/repos/redisson/redisson/events",
        assignees_url:
          "https://api.github.com/repos/redisson/redisson/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/redisson/redisson/branches{/branch}",
        tags_url: "https://api.github.com/repos/redisson/redisson/tags",
        blobs_url:
          "https://api.github.com/repos/redisson/redisson/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/redisson/redisson/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/redisson/redisson/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/redisson/redisson/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/redisson/redisson/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/redisson/redisson/languages",
        stargazers_url:
          "https://api.github.com/repos/redisson/redisson/stargazers",
        contributors_url:
          "https://api.github.com/repos/redisson/redisson/contributors",
        subscribers_url:
          "https://api.github.com/repos/redisson/redisson/subscribers",
        subscription_url:
          "https://api.github.com/repos/redisson/redisson/subscription",
        commits_url:
          "https://api.github.com/repos/redisson/redisson/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/redisson/redisson/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/redisson/redisson/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/redisson/redisson/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/redisson/redisson/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/redisson/redisson/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/redisson/redisson/merges",
        archive_url:
          "https://api.github.com/repos/redisson/redisson/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/redisson/redisson/downloads",
        issues_url:
          "https://api.github.com/repos/redisson/redisson/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/redisson/redisson/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/redisson/redisson/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/redisson/redisson/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/redisson/redisson/labels{/name}",
        releases_url:
          "https://api.github.com/repos/redisson/redisson/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/redisson/redisson/deployments",
        created_at: "2014-01-11T14:06:25Z",
        updated_at: "2024-09-10T13:09:47Z",
        pushed_at: "2024-09-10T13:07:11Z",
        git_url: "git://github.com/redisson/redisson.git",
        ssh_url: "git@github.com:redisson/redisson.git",
        clone_url: "https://github.com/redisson/redisson.git",
        svn_url: "https://github.com/redisson/redisson",
        homepage: "https://redisson.pro",
        size: 28514,
        stargazers_count: 23175,
        watchers_count: 23175,
        language: "Java",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: true,
        forks_count: 5327,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 385,
        license: {
          key: "apache-2.0",
          name: "Apache License 2.0",
          spdx_id: "Apache-2.0",
          url: "https://api.github.com/licenses/apache-2.0",
          node_id: "MDc6TGljZW5zZTI=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "cache",
          "distributed",
          "distributed-locks",
          "executor",
          "hibernate",
          "java",
          "list",
          "lock",
          "map",
          "mapreduce",
          "queue",
          "redis",
          "redis-client",
          "redis-cluster",
          "scheduler",
          "session",
          "set",
          "spring-cache",
          "tomcat",
        ],
        visibility: "public",
        forks: 5327,
        open_issues: 385,
        watchers: 23175,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 13926404,
        node_id: "MDEwOlJlcG9zaXRvcnkxMzkyNjQwNA==",
        name: "redash",
        full_name: "getredash/redash",
        private: false,
        owner: {
          login: "getredash",
          id: 10746780,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjEwNzQ2Nzgw",
          avatar_url: "https://avatars.githubusercontent.com/u/10746780?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/getredash",
          html_url: "https://github.com/getredash",
          followers_url: "https://api.github.com/users/getredash/followers",
          following_url:
            "https://api.github.com/users/getredash/following{/other_user}",
          gists_url: "https://api.github.com/users/getredash/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/getredash/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/getredash/subscriptions",
          organizations_url: "https://api.github.com/users/getredash/orgs",
          repos_url: "https://api.github.com/users/getredash/repos",
          events_url: "https://api.github.com/users/getredash/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/getredash/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/getredash/redash",
        description:
          "Make Your Company Data Driven. Connect to any data source, easily visualize, dashboard and share your data.",
        fork: false,
        url: "https://api.github.com/repos/getredash/redash",
        forks_url: "https://api.github.com/repos/getredash/redash/forks",
        keys_url: "https://api.github.com/repos/getredash/redash/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/getredash/redash/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/getredash/redash/teams",
        hooks_url: "https://api.github.com/repos/getredash/redash/hooks",
        issue_events_url:
          "https://api.github.com/repos/getredash/redash/issues/events{/number}",
        events_url: "https://api.github.com/repos/getredash/redash/events",
        assignees_url:
          "https://api.github.com/repos/getredash/redash/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/getredash/redash/branches{/branch}",
        tags_url: "https://api.github.com/repos/getredash/redash/tags",
        blobs_url:
          "https://api.github.com/repos/getredash/redash/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/getredash/redash/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/getredash/redash/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/getredash/redash/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/getredash/redash/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/getredash/redash/languages",
        stargazers_url:
          "https://api.github.com/repos/getredash/redash/stargazers",
        contributors_url:
          "https://api.github.com/repos/getredash/redash/contributors",
        subscribers_url:
          "https://api.github.com/repos/getredash/redash/subscribers",
        subscription_url:
          "https://api.github.com/repos/getredash/redash/subscription",
        commits_url:
          "https://api.github.com/repos/getredash/redash/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/getredash/redash/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/getredash/redash/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/getredash/redash/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/getredash/redash/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/getredash/redash/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/getredash/redash/merges",
        archive_url:
          "https://api.github.com/repos/getredash/redash/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/getredash/redash/downloads",
        issues_url:
          "https://api.github.com/repos/getredash/redash/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/getredash/redash/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/getredash/redash/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/getredash/redash/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/getredash/redash/labels{/name}",
        releases_url:
          "https://api.github.com/repos/getredash/redash/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/getredash/redash/deployments",
        created_at: "2013-10-28T13:19:39Z",
        updated_at: "2024-09-10T12:24:18Z",
        pushed_at: "2024-09-09T01:40:35Z",
        git_url: "git://github.com/getredash/redash.git",
        ssh_url: "git@github.com:getredash/redash.git",
        clone_url: "https://github.com/getredash/redash.git",
        svn_url: "https://github.com/getredash/redash",
        homepage: "http://redash.io/",
        size: 27309,
        stargazers_count: 25914,
        watchers_count: 25914,
        language: "Python",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: true,
        forks_count: 4334,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 635,
        license: {
          key: "bsd-2-clause",
          name: 'BSD 2-Clause "Simplified" License',
          spdx_id: "BSD-2-Clause",
          url: "https://api.github.com/licenses/bsd-2-clause",
          node_id: "MDc6TGljZW5zZTQ=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "analytics",
          "athena",
          "bi",
          "bigquery",
          "business-intelligence",
          "dashboard",
          "databricks",
          "hacktoberfest",
          "javascript",
          "mysql",
          "postgresql",
          "python",
          "redash",
          "redshift",
          "spark",
          "spark-sql",
          "visualization",
        ],
        visibility: "public",
        forks: 4334,
        open_issues: 635,
        watchers: 25914,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 5063050,
        node_id: "MDEwOlJlcG9zaXRvcnk1MDYzMDUw",
        name: "red",
        full_name: "friendica/red",
        private: false,
        owner: {
          login: "friendica",
          id: 1176581,
          node_id: "MDQ6VXNlcjExNzY1ODE=",
          avatar_url: "https://avatars.githubusercontent.com/u/1176581?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/friendica",
          html_url: "https://github.com/friendica",
          followers_url: "https://api.github.com/users/friendica/followers",
          following_url:
            "https://api.github.com/users/friendica/following{/other_user}",
          gists_url: "https://api.github.com/users/friendica/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/friendica/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/friendica/subscriptions",
          organizations_url: "https://api.github.com/users/friendica/orgs",
          repos_url: "https://api.github.com/users/friendica/repos",
          events_url: "https://api.github.com/users/friendica/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/friendica/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/friendica/red",
        description: "The Red Matrix",
        fork: false,
        url: "https://api.github.com/repos/friendica/red",
        forks_url: "https://api.github.com/repos/friendica/red/forks",
        keys_url: "https://api.github.com/repos/friendica/red/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/friendica/red/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/friendica/red/teams",
        hooks_url: "https://api.github.com/repos/friendica/red/hooks",
        issue_events_url:
          "https://api.github.com/repos/friendica/red/issues/events{/number}",
        events_url: "https://api.github.com/repos/friendica/red/events",
        assignees_url:
          "https://api.github.com/repos/friendica/red/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/friendica/red/branches{/branch}",
        tags_url: "https://api.github.com/repos/friendica/red/tags",
        blobs_url: "https://api.github.com/repos/friendica/red/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/friendica/red/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/friendica/red/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/friendica/red/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/friendica/red/statuses/{sha}",
        languages_url: "https://api.github.com/repos/friendica/red/languages",
        stargazers_url: "https://api.github.com/repos/friendica/red/stargazers",
        contributors_url:
          "https://api.github.com/repos/friendica/red/contributors",
        subscribers_url:
          "https://api.github.com/repos/friendica/red/subscribers",
        subscription_url:
          "https://api.github.com/repos/friendica/red/subscription",
        commits_url: "https://api.github.com/repos/friendica/red/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/friendica/red/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/friendica/red/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/friendica/red/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/friendica/red/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/friendica/red/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/friendica/red/merges",
        archive_url:
          "https://api.github.com/repos/friendica/red/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/friendica/red/downloads",
        issues_url:
          "https://api.github.com/repos/friendica/red/issues{/number}",
        pulls_url: "https://api.github.com/repos/friendica/red/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/friendica/red/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/friendica/red/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/friendica/red/labels{/name}",
        releases_url:
          "https://api.github.com/repos/friendica/red/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/friendica/red/deployments",
        created_at: "2012-07-16T04:40:12Z",
        updated_at: "2024-02-26T10:45:30Z",
        pushed_at: "2022-02-15T08:59:56Z",
        git_url: "git://github.com/friendica/red.git",
        ssh_url: "git@github.com:friendica/red.git",
        clone_url: "https://github.com/friendica/red.git",
        svn_url: "https://github.com/friendica/red",
        homepage: "",
        size: 70979,
        stargazers_count: 214,
        watchers_count: 214,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 50,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 50,
        open_issues: 1,
        watchers: 214,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 93982796,
        node_id: "MDEwOlJlcG9zaXRvcnk5Mzk4Mjc5Ng==",
        name: "RED_HAWK",
        full_name: "Tuhinshubhra/RED_HAWK",
        private: false,
        owner: {
          login: "Tuhinshubhra",
          id: 28696468,
          node_id: "MDQ6VXNlcjI4Njk2NDY4",
          avatar_url: "https://avatars.githubusercontent.com/u/28696468?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Tuhinshubhra",
          html_url: "https://github.com/Tuhinshubhra",
          followers_url: "https://api.github.com/users/Tuhinshubhra/followers",
          following_url:
            "https://api.github.com/users/Tuhinshubhra/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Tuhinshubhra/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Tuhinshubhra/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Tuhinshubhra/subscriptions",
          organizations_url: "https://api.github.com/users/Tuhinshubhra/orgs",
          repos_url: "https://api.github.com/users/Tuhinshubhra/repos",
          events_url:
            "https://api.github.com/users/Tuhinshubhra/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Tuhinshubhra/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Tuhinshubhra/RED_HAWK",
        description:
          "All in one tool for Information Gathering, Vulnerability Scanning and Crawling. A must have tool for all penetration testers",
        fork: false,
        url: "https://api.github.com/repos/Tuhinshubhra/RED_HAWK",
        forks_url: "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/forks",
        keys_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/teams",
        hooks_url: "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/hooks",
        issue_events_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/issues/events{/number}",
        events_url: "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/events",
        assignees_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/branches{/branch}",
        tags_url: "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/tags",
        blobs_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/languages",
        stargazers_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/stargazers",
        contributors_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/contributors",
        subscribers_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/subscribers",
        subscription_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/subscription",
        commits_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/merges",
        archive_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/downloads",
        issues_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Tuhinshubhra/RED_HAWK/deployments",
        created_at: "2017-06-11T05:02:35Z",
        updated_at: "2024-09-09T21:39:07Z",
        pushed_at: "2024-07-31T15:33:36Z",
        git_url: "git://github.com/Tuhinshubhra/RED_HAWK.git",
        ssh_url: "git@github.com:Tuhinshubhra/RED_HAWK.git",
        clone_url: "https://github.com/Tuhinshubhra/RED_HAWK.git",
        svn_url: "https://github.com/Tuhinshubhra/RED_HAWK",
        homepage: "",
        size: 46,
        stargazers_count: 2968,
        watchers_count: 2968,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 838,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 13,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "admin-scanner",
          "backups-finder",
          "cloudflare-detection",
          "cms-detector",
          "crawler",
          "domain-authority-scanner",
          "geo-ip",
          "http-header",
          "information-gathering",
          "mx-lookup",
          "page-authority-scanner",
          "reverse-ip-scan",
          "scanner",
          "sql-scanner",
          "sql-vulnerability-scannig",
          "subdomain-scanner",
          "subnet-lookup",
          "whois-lookup",
          "wordpress",
          "wordpress-scanner",
        ],
        visibility: "public",
        forks: 838,
        open_issues: 13,
        watchers: 2968,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 106586124,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDY1ODYxMjQ=",
        name: "atomic-red-team",
        full_name: "redcanaryco/atomic-red-team",
        private: false,
        owner: {
          login: "redcanaryco",
          id: 6877001,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY4NzcwMDE=",
          avatar_url: "https://avatars.githubusercontent.com/u/6877001?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/redcanaryco",
          html_url: "https://github.com/redcanaryco",
          followers_url: "https://api.github.com/users/redcanaryco/followers",
          following_url:
            "https://api.github.com/users/redcanaryco/following{/other_user}",
          gists_url: "https://api.github.com/users/redcanaryco/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/redcanaryco/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/redcanaryco/subscriptions",
          organizations_url: "https://api.github.com/users/redcanaryco/orgs",
          repos_url: "https://api.github.com/users/redcanaryco/repos",
          events_url:
            "https://api.github.com/users/redcanaryco/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/redcanaryco/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/redcanaryco/atomic-red-team",
        description:
          "Small and highly portable detection tests based on MITRE's ATT&CK.",
        fork: false,
        url: "https://api.github.com/repos/redcanaryco/atomic-red-team",
        forks_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/forks",
        keys_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/teams",
        hooks_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/hooks",
        issue_events_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/events",
        assignees_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/tags",
        blobs_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/languages",
        stargazers_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/stargazers",
        contributors_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/contributors",
        subscribers_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/subscribers",
        subscription_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/subscription",
        commits_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/merges",
        archive_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/downloads",
        issues_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/labels{/name}",
        releases_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/redcanaryco/atomic-red-team/deployments",
        created_at: "2017-10-11T17:23:32Z",
        updated_at: "2024-09-10T10:00:21Z",
        pushed_at: "2024-09-09T11:22:28Z",
        git_url: "git://github.com/redcanaryco/atomic-red-team.git",
        ssh_url: "git@github.com:redcanaryco/atomic-red-team.git",
        clone_url: "https://github.com/redcanaryco/atomic-red-team.git",
        svn_url: "https://github.com/redcanaryco/atomic-red-team",
        homepage: "",
        size: 507356,
        stargazers_count: 9546,
        watchers_count: 9546,
        language: "C",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 2760,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 15,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["mitre", "mitre-attack"],
        visibility: "public",
        forks: 2760,
        open_issues: 15,
        watchers: 9546,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 230064796,
        node_id: "MDEwOlJlcG9zaXRvcnkyMzAwNjQ3OTY=",
        name: "PokemonRedExperiments",
        full_name: "PWhiddy/PokemonRedExperiments",
        private: false,
        owner: {
          login: "PWhiddy",
          id: 15711120,
          node_id: "MDQ6VXNlcjE1NzExMTIw",
          avatar_url: "https://avatars.githubusercontent.com/u/15711120?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/PWhiddy",
          html_url: "https://github.com/PWhiddy",
          followers_url: "https://api.github.com/users/PWhiddy/followers",
          following_url:
            "https://api.github.com/users/PWhiddy/following{/other_user}",
          gists_url: "https://api.github.com/users/PWhiddy/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/PWhiddy/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/PWhiddy/subscriptions",
          organizations_url: "https://api.github.com/users/PWhiddy/orgs",
          repos_url: "https://api.github.com/users/PWhiddy/repos",
          events_url: "https://api.github.com/users/PWhiddy/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/PWhiddy/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/PWhiddy/PokemonRedExperiments",
        description: "Playing Pokemon Red with Reinforcement Learning",
        fork: false,
        url: "https://api.github.com/repos/PWhiddy/PokemonRedExperiments",
        forks_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/forks",
        keys_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/teams",
        hooks_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/hooks",
        issue_events_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/events",
        assignees_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/tags",
        blobs_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/languages",
        stargazers_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/stargazers",
        contributors_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/contributors",
        subscribers_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/subscribers",
        subscription_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/subscription",
        commits_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/merges",
        archive_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/downloads",
        issues_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/labels{/name}",
        releases_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/PWhiddy/PokemonRedExperiments/deployments",
        created_at: "2019-12-25T07:52:16Z",
        updated_at: "2024-09-10T12:03:59Z",
        pushed_at: "2024-09-04T08:08:33Z",
        git_url: "git://github.com/PWhiddy/PokemonRedExperiments.git",
        ssh_url: "git@github.com:PWhiddy/PokemonRedExperiments.git",
        clone_url: "https://github.com/PWhiddy/PokemonRedExperiments.git",
        svn_url: "https://github.com/PWhiddy/PokemonRedExperiments",
        homepage: "",
        size: 69252,
        stargazers_count: 6819,
        watchers_count: 6819,
        language: "Jupyter Notebook",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 617,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 67,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 617,
        open_issues: 67,
        watchers: 6819,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 48957263,
        node_id: "MDEwOlJlcG9zaXRvcnk0ODk1NzI2Mw==",
        name: "ReduxCasts",
        full_name: "StephenGrider/ReduxCasts",
        private: false,
        owner: {
          login: "StephenGrider",
          id: 5003903,
          node_id: "MDQ6VXNlcjUwMDM5MDM=",
          avatar_url: "https://avatars.githubusercontent.com/u/5003903?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/StephenGrider",
          html_url: "https://github.com/StephenGrider",
          followers_url: "https://api.github.com/users/StephenGrider/followers",
          following_url:
            "https://api.github.com/users/StephenGrider/following{/other_user}",
          gists_url:
            "https://api.github.com/users/StephenGrider/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/StephenGrider/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/StephenGrider/subscriptions",
          organizations_url: "https://api.github.com/users/StephenGrider/orgs",
          repos_url: "https://api.github.com/users/StephenGrider/repos",
          events_url:
            "https://api.github.com/users/StephenGrider/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/StephenGrider/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/StephenGrider/ReduxCasts",
        description: "Modern React with Redux",
        fork: false,
        url: "https://api.github.com/repos/StephenGrider/ReduxCasts",
        forks_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/forks",
        keys_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/teams",
        hooks_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/hooks",
        issue_events_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/events",
        assignees_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/branches{/branch}",
        tags_url: "https://api.github.com/repos/StephenGrider/ReduxCasts/tags",
        blobs_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/languages",
        stargazers_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/stargazers",
        contributors_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/contributors",
        subscribers_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/subscribers",
        subscription_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/subscription",
        commits_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/merges",
        archive_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/downloads",
        issues_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/labels{/name}",
        releases_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/StephenGrider/ReduxCasts/deployments",
        created_at: "2016-01-03T19:04:14Z",
        updated_at: "2024-08-23T02:05:24Z",
        pushed_at: "2023-09-23T07:08:05Z",
        git_url: "git://github.com/StephenGrider/ReduxCasts.git",
        ssh_url: "git@github.com:StephenGrider/ReduxCasts.git",
        clone_url: "https://github.com/StephenGrider/ReduxCasts.git",
        svn_url: "https://github.com/StephenGrider/ReduxCasts",
        homepage: "",
        size: 125,
        stargazers_count: 2573,
        watchers_count: 2573,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 1731,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 33,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1731,
        open_issues: 33,
        watchers: 2573,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 496680191,
        node_id: "R_kgDOHZq8_w",
        name: "RedditVideoMakerBot",
        full_name: "elebumm/RedditVideoMakerBot",
        private: false,
        owner: {
          login: "elebumm",
          id: 6053155,
          node_id: "MDQ6VXNlcjYwNTMxNTU=",
          avatar_url: "https://avatars.githubusercontent.com/u/6053155?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/elebumm",
          html_url: "https://github.com/elebumm",
          followers_url: "https://api.github.com/users/elebumm/followers",
          following_url:
            "https://api.github.com/users/elebumm/following{/other_user}",
          gists_url: "https://api.github.com/users/elebumm/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/elebumm/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/elebumm/subscriptions",
          organizations_url: "https://api.github.com/users/elebumm/orgs",
          repos_url: "https://api.github.com/users/elebumm/repos",
          events_url: "https://api.github.com/users/elebumm/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/elebumm/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/elebumm/RedditVideoMakerBot",
        description: "Create Reddit Videos with just✨ one command ✨",
        fork: false,
        url: "https://api.github.com/repos/elebumm/RedditVideoMakerBot",
        forks_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/forks",
        keys_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/teams",
        hooks_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/hooks",
        issue_events_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/events",
        assignees_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/tags",
        blobs_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/languages",
        stargazers_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/stargazers",
        contributors_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/contributors",
        subscribers_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/subscribers",
        subscription_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/subscription",
        commits_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/merges",
        archive_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/downloads",
        issues_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/labels{/name}",
        releases_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/elebumm/RedditVideoMakerBot/deployments",
        created_at: "2022-05-26T15:48:10Z",
        updated_at: "2024-09-10T08:56:52Z",
        pushed_at: "2024-09-08T06:54:05Z",
        git_url: "git://github.com/elebumm/RedditVideoMakerBot.git",
        ssh_url: "git@github.com:elebumm/RedditVideoMakerBot.git",
        clone_url: "https://github.com/elebumm/RedditVideoMakerBot.git",
        svn_url: "https://github.com/elebumm/RedditVideoMakerBot",
        homepage: null,
        size: 66571,
        stargazers_count: 6508,
        watchers_count: 6508,
        language: "Python",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 1831,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 5,
        license: {
          key: "gpl-3.0",
          name: "GNU General Public License v3.0",
          spdx_id: "GPL-3.0",
          url: "https://api.github.com/licenses/gpl-3.0",
          node_id: "MDc6TGljZW5zZTk=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1831,
        open_issues: 5,
        watchers: 6508,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 131160647,
        node_id: "MDEwOlJlcG9zaXRvcnkxMzExNjA2NDc=",
        name: "Red-Teaming-Toolkit",
        full_name: "infosecn1nja/Red-Teaming-Toolkit",
        private: false,
        owner: {
          login: "infosecn1nja",
          id: 5790261,
          node_id: "MDQ6VXNlcjU3OTAyNjE=",
          avatar_url: "https://avatars.githubusercontent.com/u/5790261?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/infosecn1nja",
          html_url: "https://github.com/infosecn1nja",
          followers_url: "https://api.github.com/users/infosecn1nja/followers",
          following_url:
            "https://api.github.com/users/infosecn1nja/following{/other_user}",
          gists_url:
            "https://api.github.com/users/infosecn1nja/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/infosecn1nja/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/infosecn1nja/subscriptions",
          organizations_url: "https://api.github.com/users/infosecn1nja/orgs",
          repos_url: "https://api.github.com/users/infosecn1nja/repos",
          events_url:
            "https://api.github.com/users/infosecn1nja/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/infosecn1nja/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/infosecn1nja/Red-Teaming-Toolkit",
        description:
          "This repository contains cutting-edge open-source security tools (OST) for a red teamer and threat hunter.",
        fork: false,
        url: "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit",
        forks_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/forks",
        keys_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/teams",
        hooks_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/hooks",
        issue_events_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/events",
        assignees_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/tags",
        blobs_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/languages",
        stargazers_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/stargazers",
        contributors_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/contributors",
        subscribers_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/subscribers",
        subscription_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/subscription",
        commits_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/merges",
        archive_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/downloads",
        issues_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/labels{/name}",
        releases_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/infosecn1nja/Red-Teaming-Toolkit/deployments",
        created_at: "2018-04-26T13:35:09Z",
        updated_at: "2024-09-10T13:09:47Z",
        pushed_at: "2024-09-01T11:58:39Z",
        git_url: "git://github.com/infosecn1nja/Red-Teaming-Toolkit.git",
        ssh_url: "git@github.com:infosecn1nja/Red-Teaming-Toolkit.git",
        clone_url: "https://github.com/infosecn1nja/Red-Teaming-Toolkit.git",
        svn_url: "https://github.com/infosecn1nja/Red-Teaming-Toolkit",
        homepage: "",
        size: 301,
        stargazers_count: 8943,
        watchers_count: 8943,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 2183,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "gpl-3.0",
          name: "GNU General Public License v3.0",
          spdx_id: "GPL-3.0",
          url: "https://api.github.com/licenses/gpl-3.0",
          node_id: "MDc6TGljZW5zZTk=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["hacking", "infosec", "pentesting", "red-team"],
        visibility: "public",
        forks: 2183,
        open_issues: 0,
        watchers: 8943,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 26554,
        node_id: "MDEwOlJlcG9zaXRvcnkyNjU1NA==",
        name: "reddit",
        full_name: "reddit-archive/reddit",
        private: false,
        owner: {
          login: "reddit-archive",
          id: 35933936,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjM1OTMzOTM2",
          avatar_url: "https://avatars.githubusercontent.com/u/35933936?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/reddit-archive",
          html_url: "https://github.com/reddit-archive",
          followers_url:
            "https://api.github.com/users/reddit-archive/followers",
          following_url:
            "https://api.github.com/users/reddit-archive/following{/other_user}",
          gists_url:
            "https://api.github.com/users/reddit-archive/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/reddit-archive/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/reddit-archive/subscriptions",
          organizations_url: "https://api.github.com/users/reddit-archive/orgs",
          repos_url: "https://api.github.com/users/reddit-archive/repos",
          events_url:
            "https://api.github.com/users/reddit-archive/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/reddit-archive/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/reddit-archive/reddit",
        description: "historical code from reddit.com",
        fork: false,
        url: "https://api.github.com/repos/reddit-archive/reddit",
        forks_url: "https://api.github.com/repos/reddit-archive/reddit/forks",
        keys_url:
          "https://api.github.com/repos/reddit-archive/reddit/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/reddit-archive/reddit/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/reddit-archive/reddit/teams",
        hooks_url: "https://api.github.com/repos/reddit-archive/reddit/hooks",
        issue_events_url:
          "https://api.github.com/repos/reddit-archive/reddit/issues/events{/number}",
        events_url: "https://api.github.com/repos/reddit-archive/reddit/events",
        assignees_url:
          "https://api.github.com/repos/reddit-archive/reddit/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/reddit-archive/reddit/branches{/branch}",
        tags_url: "https://api.github.com/repos/reddit-archive/reddit/tags",
        blobs_url:
          "https://api.github.com/repos/reddit-archive/reddit/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/reddit-archive/reddit/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/reddit-archive/reddit/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/reddit-archive/reddit/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/reddit-archive/reddit/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/reddit-archive/reddit/languages",
        stargazers_url:
          "https://api.github.com/repos/reddit-archive/reddit/stargazers",
        contributors_url:
          "https://api.github.com/repos/reddit-archive/reddit/contributors",
        subscribers_url:
          "https://api.github.com/repos/reddit-archive/reddit/subscribers",
        subscription_url:
          "https://api.github.com/repos/reddit-archive/reddit/subscription",
        commits_url:
          "https://api.github.com/repos/reddit-archive/reddit/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/reddit-archive/reddit/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/reddit-archive/reddit/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/reddit-archive/reddit/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/reddit-archive/reddit/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/reddit-archive/reddit/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/reddit-archive/reddit/merges",
        archive_url:
          "https://api.github.com/repos/reddit-archive/reddit/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/reddit-archive/reddit/downloads",
        issues_url:
          "https://api.github.com/repos/reddit-archive/reddit/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/reddit-archive/reddit/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/reddit-archive/reddit/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/reddit-archive/reddit/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/reddit-archive/reddit/labels{/name}",
        releases_url:
          "https://api.github.com/repos/reddit-archive/reddit/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/reddit-archive/reddit/deployments",
        created_at: "2008-06-18T23:30:53Z",
        updated_at: "2024-09-10T12:24:04Z",
        pushed_at: "2017-10-17T19:57:07Z",
        git_url: "git://github.com/reddit-archive/reddit.git",
        ssh_url: "git@github.com:reddit-archive/reddit.git",
        clone_url: "https://github.com/reddit-archive/reddit.git",
        svn_url: "https://github.com/reddit-archive/reddit",
        homepage: "",
        size: 40093,
        stargazers_count: 16793,
        watchers_count: 16793,
        language: "Python",
        has_issues: false,
        has_projects: true,
        has_downloads: false,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 2862,
        mirror_url: null,
        archived: true,
        disabled: false,
        open_issues_count: 304,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["javascript", "python", "reddit"],
        visibility: "public",
        forks: 2862,
        open_issues: 304,
        watchers: 16793,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 415927371,
        node_id: "R_kgDOGMqMSw",
        name: "NootedRed",
        full_name: "ChefKissInc/NootedRed",
        private: false,
        owner: {
          login: "ChefKissInc",
          id: 92263808,
          node_id: "O_kgDOBX_VgA",
          avatar_url: "https://avatars.githubusercontent.com/u/92263808?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ChefKissInc",
          html_url: "https://github.com/ChefKissInc",
          followers_url: "https://api.github.com/users/ChefKissInc/followers",
          following_url:
            "https://api.github.com/users/ChefKissInc/following{/other_user}",
          gists_url: "https://api.github.com/users/ChefKissInc/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ChefKissInc/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ChefKissInc/subscriptions",
          organizations_url: "https://api.github.com/users/ChefKissInc/orgs",
          repos_url: "https://api.github.com/users/ChefKissInc/repos",
          events_url:
            "https://api.github.com/users/ChefKissInc/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ChefKissInc/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/ChefKissInc/NootedRed",
        description: "The AMD Vega iGPU support patch kext. No commercial use.",
        fork: false,
        url: "https://api.github.com/repos/ChefKissInc/NootedRed",
        forks_url: "https://api.github.com/repos/ChefKissInc/NootedRed/forks",
        keys_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/ChefKissInc/NootedRed/teams",
        hooks_url: "https://api.github.com/repos/ChefKissInc/NootedRed/hooks",
        issue_events_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/issues/events{/number}",
        events_url: "https://api.github.com/repos/ChefKissInc/NootedRed/events",
        assignees_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/branches{/branch}",
        tags_url: "https://api.github.com/repos/ChefKissInc/NootedRed/tags",
        blobs_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/languages",
        stargazers_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/stargazers",
        contributors_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/contributors",
        subscribers_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/subscribers",
        subscription_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/subscription",
        commits_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/ChefKissInc/NootedRed/merges",
        archive_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/downloads",
        issues_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/labels{/name}",
        releases_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/ChefKissInc/NootedRed/deployments",
        created_at: "2021-10-11T12:58:48Z",
        updated_at: "2024-09-10T09:38:59Z",
        pushed_at: "2024-08-29T21:52:45Z",
        git_url: "git://github.com/ChefKissInc/NootedRed.git",
        ssh_url: "git@github.com:ChefKissInc/NootedRed.git",
        clone_url: "https://github.com/ChefKissInc/NootedRed.git",
        svn_url: "https://github.com/ChefKissInc/NootedRed",
        homepage: "https://chefkissinc.github.io/applehax/nootedred/",
        size: 2035,
        stargazers_count: 1641,
        watchers_count: 1641,
        language: "C++",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 772,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 17,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: true,
        topics: [
          "amd",
          "amd64",
          "amdgpu",
          "apu",
          "hackintosh",
          "kext",
          "macos",
          "macosx",
          "noot",
          "nooted",
          "vega",
        ],
        visibility: "public",
        forks: 772,
        open_issues: 17,
        watchers: 1641,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 45250726,
        node_id: "MDEwOlJlcG9zaXRvcnk0NTI1MDcyNg==",
        name: "redoc",
        full_name: "Redocly/redoc",
        private: false,
        owner: {
          login: "Redocly",
          id: 32099856,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjMyMDk5ODU2",
          avatar_url: "https://avatars.githubusercontent.com/u/32099856?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Redocly",
          html_url: "https://github.com/Redocly",
          followers_url: "https://api.github.com/users/Redocly/followers",
          following_url:
            "https://api.github.com/users/Redocly/following{/other_user}",
          gists_url: "https://api.github.com/users/Redocly/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Redocly/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Redocly/subscriptions",
          organizations_url: "https://api.github.com/users/Redocly/orgs",
          repos_url: "https://api.github.com/users/Redocly/repos",
          events_url: "https://api.github.com/users/Redocly/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Redocly/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/Redocly/redoc",
        description:
          "📘  OpenAPI/Swagger-generated API Reference Documentation",
        fork: false,
        url: "https://api.github.com/repos/Redocly/redoc",
        forks_url: "https://api.github.com/repos/Redocly/redoc/forks",
        keys_url: "https://api.github.com/repos/Redocly/redoc/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Redocly/redoc/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Redocly/redoc/teams",
        hooks_url: "https://api.github.com/repos/Redocly/redoc/hooks",
        issue_events_url:
          "https://api.github.com/repos/Redocly/redoc/issues/events{/number}",
        events_url: "https://api.github.com/repos/Redocly/redoc/events",
        assignees_url:
          "https://api.github.com/repos/Redocly/redoc/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Redocly/redoc/branches{/branch}",
        tags_url: "https://api.github.com/repos/Redocly/redoc/tags",
        blobs_url: "https://api.github.com/repos/Redocly/redoc/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Redocly/redoc/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Redocly/redoc/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/Redocly/redoc/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Redocly/redoc/statuses/{sha}",
        languages_url: "https://api.github.com/repos/Redocly/redoc/languages",
        stargazers_url: "https://api.github.com/repos/Redocly/redoc/stargazers",
        contributors_url:
          "https://api.github.com/repos/Redocly/redoc/contributors",
        subscribers_url:
          "https://api.github.com/repos/Redocly/redoc/subscribers",
        subscription_url:
          "https://api.github.com/repos/Redocly/redoc/subscription",
        commits_url: "https://api.github.com/repos/Redocly/redoc/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Redocly/redoc/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Redocly/redoc/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Redocly/redoc/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Redocly/redoc/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Redocly/redoc/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Redocly/redoc/merges",
        archive_url:
          "https://api.github.com/repos/Redocly/redoc/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/Redocly/redoc/downloads",
        issues_url:
          "https://api.github.com/repos/Redocly/redoc/issues{/number}",
        pulls_url: "https://api.github.com/repos/Redocly/redoc/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Redocly/redoc/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Redocly/redoc/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/Redocly/redoc/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Redocly/redoc/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Redocly/redoc/deployments",
        created_at: "2015-10-30T12:53:02Z",
        updated_at: "2024-09-10T12:24:32Z",
        pushed_at: "2024-09-03T22:47:17Z",
        git_url: "git://github.com/Redocly/redoc.git",
        ssh_url: "git@github.com:Redocly/redoc.git",
        clone_url: "https://github.com/Redocly/redoc.git",
        svn_url: "https://github.com/Redocly/redoc",
        homepage: "https://redocly.github.io/redoc/",
        size: 58337,
        stargazers_count: 23265,
        watchers_count: 23265,
        language: "TypeScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: true,
        has_discussions: false,
        forks_count: 2284,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 355,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "api-documentation",
          "documentation-generator",
          "documentation-tool",
          "hacktoberfest",
          "openapi",
          "openapi-specification",
          "openapi3",
          "openapi31",
          "reactjs",
          "redoc",
          "swagger",
        ],
        visibility: "public",
        forks: 2284,
        open_issues: 355,
        watchers: 23265,
        default_branch: "main",
        score: 1.0,
      },
      {
        id: 48904888,
        node_id: "MDEwOlJlcG9zaXRvcnk0ODkwNDg4OA==",
        name: "Red-DiscordBot",
        full_name: "Cog-Creators/Red-DiscordBot",
        private: false,
        owner: {
          login: "Cog-Creators",
          id: 23690422,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjIzNjkwNDIy",
          avatar_url: "https://avatars.githubusercontent.com/u/23690422?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Cog-Creators",
          html_url: "https://github.com/Cog-Creators",
          followers_url: "https://api.github.com/users/Cog-Creators/followers",
          following_url:
            "https://api.github.com/users/Cog-Creators/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Cog-Creators/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Cog-Creators/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Cog-Creators/subscriptions",
          organizations_url: "https://api.github.com/users/Cog-Creators/orgs",
          repos_url: "https://api.github.com/users/Cog-Creators/repos",
          events_url:
            "https://api.github.com/users/Cog-Creators/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Cog-Creators/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/Cog-Creators/Red-DiscordBot",
        description: "A multi-function Discord bot",
        fork: false,
        url: "https://api.github.com/repos/Cog-Creators/Red-DiscordBot",
        forks_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/forks",
        keys_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/teams",
        hooks_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/hooks",
        issue_events_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/events",
        assignees_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/tags",
        blobs_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/languages",
        stargazers_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/stargazers",
        contributors_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/contributors",
        subscribers_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/subscribers",
        subscription_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/subscription",
        commits_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/merges",
        archive_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/downloads",
        issues_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Cog-Creators/Red-DiscordBot/deployments",
        created_at: "2016-01-02T09:27:12Z",
        updated_at: "2024-09-09T13:09:55Z",
        pushed_at: "2024-09-01T22:51:14Z",
        git_url: "git://github.com/Cog-Creators/Red-DiscordBot.git",
        ssh_url: "git@github.com:Cog-Creators/Red-DiscordBot.git",
        clone_url: "https://github.com/Cog-Creators/Red-DiscordBot.git",
        svn_url: "https://github.com/Cog-Creators/Red-DiscordBot",
        homepage: "https://docs.discord.red",
        size: 82776,
        stargazers_count: 4726,
        watchers_count: 4726,
        language: "Python",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 2298,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 283,
        license: {
          key: "gpl-3.0",
          name: "GNU General Public License v3.0",
          spdx_id: "GPL-3.0",
          url: "https://api.github.com/licenses/gpl-3.0",
          node_id: "MDc6TGljZW5zZTk=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "bot",
          "chatbot",
          "discord",
          "discord-bot",
          "fun",
          "hacktoberfest",
          "moderation",
          "modular",
          "music",
          "python",
          "trivia",
        ],
        visibility: "public",
        forks: 2298,
        open_issues: 283,
        watchers: 4726,
        default_branch: "V3/develop",
        score: 1.0,
      },
      {
        id: 38934449,
        node_id: "MDEwOlJlcG9zaXRvcnkzODkzNDQ0OQ==",
        name: "react-redux",
        full_name: "reduxjs/react-redux",
        private: false,
        owner: {
          login: "reduxjs",
          id: 13142323,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjEzMTQyMzIz",
          avatar_url: "https://avatars.githubusercontent.com/u/13142323?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/reduxjs",
          html_url: "https://github.com/reduxjs",
          followers_url: "https://api.github.com/users/reduxjs/followers",
          following_url:
            "https://api.github.com/users/reduxjs/following{/other_user}",
          gists_url: "https://api.github.com/users/reduxjs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/reduxjs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/reduxjs/subscriptions",
          organizations_url: "https://api.github.com/users/reduxjs/orgs",
          repos_url: "https://api.github.com/users/reduxjs/repos",
          events_url: "https://api.github.com/users/reduxjs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/reduxjs/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/reduxjs/react-redux",
        description: "Official React bindings for Redux",
        fork: false,
        url: "https://api.github.com/repos/reduxjs/react-redux",
        forks_url: "https://api.github.com/repos/reduxjs/react-redux/forks",
        keys_url:
          "https://api.github.com/repos/reduxjs/react-redux/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/reduxjs/react-redux/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/reduxjs/react-redux/teams",
        hooks_url: "https://api.github.com/repos/reduxjs/react-redux/hooks",
        issue_events_url:
          "https://api.github.com/repos/reduxjs/react-redux/issues/events{/number}",
        events_url: "https://api.github.com/repos/reduxjs/react-redux/events",
        assignees_url:
          "https://api.github.com/repos/reduxjs/react-redux/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/reduxjs/react-redux/branches{/branch}",
        tags_url: "https://api.github.com/repos/reduxjs/react-redux/tags",
        blobs_url:
          "https://api.github.com/repos/reduxjs/react-redux/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/reduxjs/react-redux/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/reduxjs/react-redux/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/reduxjs/react-redux/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/reduxjs/react-redux/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/reduxjs/react-redux/languages",
        stargazers_url:
          "https://api.github.com/repos/reduxjs/react-redux/stargazers",
        contributors_url:
          "https://api.github.com/repos/reduxjs/react-redux/contributors",
        subscribers_url:
          "https://api.github.com/repos/reduxjs/react-redux/subscribers",
        subscription_url:
          "https://api.github.com/repos/reduxjs/react-redux/subscription",
        commits_url:
          "https://api.github.com/repos/reduxjs/react-redux/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/reduxjs/react-redux/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/reduxjs/react-redux/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/reduxjs/react-redux/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/reduxjs/react-redux/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/reduxjs/react-redux/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/reduxjs/react-redux/merges",
        archive_url:
          "https://api.github.com/repos/reduxjs/react-redux/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/reduxjs/react-redux/downloads",
        issues_url:
          "https://api.github.com/repos/reduxjs/react-redux/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/reduxjs/react-redux/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/reduxjs/react-redux/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/reduxjs/react-redux/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/reduxjs/react-redux/labels{/name}",
        releases_url:
          "https://api.github.com/repos/reduxjs/react-redux/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/reduxjs/react-redux/deployments",
        created_at: "2015-07-11T17:32:01Z",
        updated_at: "2024-09-10T04:56:14Z",
        pushed_at: "2024-08-31T14:48:49Z",
        git_url: "git://github.com/reduxjs/react-redux.git",
        ssh_url: "git@github.com:reduxjs/react-redux.git",
        clone_url: "https://github.com/reduxjs/react-redux.git",
        svn_url: "https://github.com/reduxjs/react-redux",
        homepage: "https://react-redux.js.org",
        size: 10931,
        stargazers_count: 23351,
        watchers_count: 23351,
        language: "TypeScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 3374,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 29,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["react", "redux"],
        visibility: "public",
        forks: 3374,
        open_issues: 29,
        watchers: 23351,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 13133024,
        node_id: "MDEwOlJlcG9zaXRvcnkxMzEzMzAyNA==",
        name: "node-red-nodes",
        full_name: "node-red/node-red-nodes",
        private: false,
        owner: {
          login: "node-red",
          id: 5375661,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjUzNzU2NjE=",
          avatar_url: "https://avatars.githubusercontent.com/u/5375661?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/node-red",
          html_url: "https://github.com/node-red",
          followers_url: "https://api.github.com/users/node-red/followers",
          following_url:
            "https://api.github.com/users/node-red/following{/other_user}",
          gists_url: "https://api.github.com/users/node-red/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/node-red/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/node-red/subscriptions",
          organizations_url: "https://api.github.com/users/node-red/orgs",
          repos_url: "https://api.github.com/users/node-red/repos",
          events_url: "https://api.github.com/users/node-red/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/node-red/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/node-red/node-red-nodes",
        description: "Extra nodes for Node-RED",
        fork: false,
        url: "https://api.github.com/repos/node-red/node-red-nodes",
        forks_url: "https://api.github.com/repos/node-red/node-red-nodes/forks",
        keys_url:
          "https://api.github.com/repos/node-red/node-red-nodes/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/node-red/node-red-nodes/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/node-red/node-red-nodes/teams",
        hooks_url: "https://api.github.com/repos/node-red/node-red-nodes/hooks",
        issue_events_url:
          "https://api.github.com/repos/node-red/node-red-nodes/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/node-red/node-red-nodes/events",
        assignees_url:
          "https://api.github.com/repos/node-red/node-red-nodes/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/node-red/node-red-nodes/branches{/branch}",
        tags_url: "https://api.github.com/repos/node-red/node-red-nodes/tags",
        blobs_url:
          "https://api.github.com/repos/node-red/node-red-nodes/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/node-red/node-red-nodes/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/node-red/node-red-nodes/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/node-red/node-red-nodes/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/node-red/node-red-nodes/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/node-red/node-red-nodes/languages",
        stargazers_url:
          "https://api.github.com/repos/node-red/node-red-nodes/stargazers",
        contributors_url:
          "https://api.github.com/repos/node-red/node-red-nodes/contributors",
        subscribers_url:
          "https://api.github.com/repos/node-red/node-red-nodes/subscribers",
        subscription_url:
          "https://api.github.com/repos/node-red/node-red-nodes/subscription",
        commits_url:
          "https://api.github.com/repos/node-red/node-red-nodes/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/node-red/node-red-nodes/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/node-red/node-red-nodes/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/node-red/node-red-nodes/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/node-red/node-red-nodes/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/node-red/node-red-nodes/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/node-red/node-red-nodes/merges",
        archive_url:
          "https://api.github.com/repos/node-red/node-red-nodes/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/node-red/node-red-nodes/downloads",
        issues_url:
          "https://api.github.com/repos/node-red/node-red-nodes/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/node-red/node-red-nodes/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/node-red/node-red-nodes/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/node-red/node-red-nodes/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/node-red/node-red-nodes/labels{/name}",
        releases_url:
          "https://api.github.com/repos/node-red/node-red-nodes/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/node-red/node-red-nodes/deployments",
        created_at: "2013-09-26T20:05:59Z",
        updated_at: "2024-09-10T12:12:36Z",
        pushed_at: "2024-08-31T19:08:11Z",
        git_url: "git://github.com/node-red/node-red-nodes.git",
        ssh_url: "git@github.com:node-red/node-red-nodes.git",
        clone_url: "https://github.com/node-red/node-red-nodes.git",
        svn_url: "https://github.com/node-red/node-red-nodes",
        homepage: "",
        size: 4068,
        stargazers_count: 986,
        watchers_count: 986,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 592,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 162,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["hacktoberfest", "node-red"],
        visibility: "public",
        forks: 592,
        open_issues: 162,
        watchers: 986,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 9219388,
        node_id: "MDEwOlJlcG9zaXRvcnk5MjE5Mzg4",
        name: "RedReader",
        full_name: "QuantumBadger/RedReader",
        private: false,
        owner: {
          login: "QuantumBadger",
          id: 2998158,
          node_id: "MDQ6VXNlcjI5OTgxNTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/2998158?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/QuantumBadger",
          html_url: "https://github.com/QuantumBadger",
          followers_url: "https://api.github.com/users/QuantumBadger/followers",
          following_url:
            "https://api.github.com/users/QuantumBadger/following{/other_user}",
          gists_url:
            "https://api.github.com/users/QuantumBadger/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/QuantumBadger/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/QuantumBadger/subscriptions",
          organizations_url: "https://api.github.com/users/QuantumBadger/orgs",
          repos_url: "https://api.github.com/users/QuantumBadger/repos",
          events_url:
            "https://api.github.com/users/QuantumBadger/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/QuantumBadger/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/QuantumBadger/RedReader",
        description: "An unofficial open source Android app for Reddit.",
        fork: false,
        url: "https://api.github.com/repos/QuantumBadger/RedReader",
        forks_url: "https://api.github.com/repos/QuantumBadger/RedReader/forks",
        keys_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/QuantumBadger/RedReader/teams",
        hooks_url: "https://api.github.com/repos/QuantumBadger/RedReader/hooks",
        issue_events_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/events",
        assignees_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/branches{/branch}",
        tags_url: "https://api.github.com/repos/QuantumBadger/RedReader/tags",
        blobs_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/languages",
        stargazers_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/stargazers",
        contributors_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/contributors",
        subscribers_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/subscribers",
        subscription_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/subscription",
        commits_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/merges",
        archive_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/downloads",
        issues_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/labels{/name}",
        releases_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/QuantumBadger/RedReader/deployments",
        created_at: "2013-04-04T14:00:14Z",
        updated_at: "2024-09-10T01:50:13Z",
        pushed_at: "2024-08-26T00:03:26Z",
        git_url: "git://github.com/QuantumBadger/RedReader.git",
        ssh_url: "git@github.com:QuantumBadger/RedReader.git",
        clone_url: "https://github.com/QuantumBadger/RedReader.git",
        svn_url: "https://github.com/QuantumBadger/RedReader",
        homepage: "",
        size: 10302,
        stargazers_count: 1959,
        watchers_count: 1959,
        language: "Java",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 482,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 390,
        license: {
          key: "gpl-3.0",
          name: "GNU General Public License v3.0",
          spdx_id: "GPL-3.0",
          url: "https://api.github.com/licenses/gpl-3.0",
          node_id: "MDc6TGljZW5zZTk=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["android", "android-app", "android-application", "reddit"],
        visibility: "public",
        forks: 482,
        open_issues: 390,
        watchers: 1959,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 98235819,
        node_id: "MDEwOlJlcG9zaXRvcnk5ODIzNTgxOQ==",
        name: "RED",
        full_name: "google/RED",
        private: false,
        owner: {
          login: "google",
          id: 1342004,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjEzNDIwMDQ=",
          avatar_url: "https://avatars.githubusercontent.com/u/1342004?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/google",
          html_url: "https://github.com/google",
          followers_url: "https://api.github.com/users/google/followers",
          following_url:
            "https://api.github.com/users/google/following{/other_user}",
          gists_url: "https://api.github.com/users/google/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/google/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/google/subscriptions",
          organizations_url: "https://api.github.com/users/google/orgs",
          repos_url: "https://api.github.com/users/google/repos",
          events_url: "https://api.github.com/users/google/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/google/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/google/RED",
        description: "RED - Regularization by Denoising",
        fork: false,
        url: "https://api.github.com/repos/google/RED",
        forks_url: "https://api.github.com/repos/google/RED/forks",
        keys_url: "https://api.github.com/repos/google/RED/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/google/RED/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/google/RED/teams",
        hooks_url: "https://api.github.com/repos/google/RED/hooks",
        issue_events_url:
          "https://api.github.com/repos/google/RED/issues/events{/number}",
        events_url: "https://api.github.com/repos/google/RED/events",
        assignees_url:
          "https://api.github.com/repos/google/RED/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/google/RED/branches{/branch}",
        tags_url: "https://api.github.com/repos/google/RED/tags",
        blobs_url: "https://api.github.com/repos/google/RED/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/google/RED/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/google/RED/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/google/RED/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/google/RED/statuses/{sha}",
        languages_url: "https://api.github.com/repos/google/RED/languages",
        stargazers_url: "https://api.github.com/repos/google/RED/stargazers",
        contributors_url:
          "https://api.github.com/repos/google/RED/contributors",
        subscribers_url: "https://api.github.com/repos/google/RED/subscribers",
        subscription_url:
          "https://api.github.com/repos/google/RED/subscription",
        commits_url: "https://api.github.com/repos/google/RED/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/google/RED/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/google/RED/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/google/RED/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/google/RED/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/google/RED/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/google/RED/merges",
        archive_url:
          "https://api.github.com/repos/google/RED/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/google/RED/downloads",
        issues_url: "https://api.github.com/repos/google/RED/issues{/number}",
        pulls_url: "https://api.github.com/repos/google/RED/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/google/RED/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/google/RED/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/google/RED/labels{/name}",
        releases_url: "https://api.github.com/repos/google/RED/releases{/id}",
        deployments_url: "https://api.github.com/repos/google/RED/deployments",
        created_at: "2017-07-24T21:18:21Z",
        updated_at: "2024-06-28T21:55:40Z",
        pushed_at: "2021-10-04T19:36:04Z",
        git_url: "git://github.com/google/RED.git",
        ssh_url: "git@github.com:google/RED.git",
        clone_url: "https://github.com/google/RED.git",
        svn_url: "https://github.com/google/RED",
        homepage: "",
        size: 872,
        stargazers_count: 109,
        watchers_count: 109,
        language: "MATLAB",
        has_issues: false,
        has_projects: true,
        has_downloads: false,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 41,
        mirror_url: null,
        archived: true,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "apache-2.0",
          name: "Apache License 2.0",
          spdx_id: "Apache-2.0",
          url: "https://api.github.com/licenses/apache-2.0",
          node_id: "MDc6TGljZW5zZTI=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 41,
        open_issues: 0,
        watchers: 109,
        default_branch: "master",
        score: 1.0,
      },
      {
        id: 538444958,
        node_id: "R_kgDOIBgEng",
        name: "RedTeam-Tools",
        full_name: "A-poc/RedTeam-Tools",
        private: false,
        owner: {
          login: "A-poc",
          id: 100603074,
          node_id: "U_kgDOBf8Uwg",
          avatar_url: "https://avatars.githubusercontent.com/u/100603074?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/A-poc",
          html_url: "https://github.com/A-poc",
          followers_url: "https://api.github.com/users/A-poc/followers",
          following_url:
            "https://api.github.com/users/A-poc/following{/other_user}",
          gists_url: "https://api.github.com/users/A-poc/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/A-poc/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/A-poc/subscriptions",
          organizations_url: "https://api.github.com/users/A-poc/orgs",
          repos_url: "https://api.github.com/users/A-poc/repos",
          events_url: "https://api.github.com/users/A-poc/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/A-poc/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/A-poc/RedTeam-Tools",
        description: "Tools and Techniques for Red Team / Penetration Testing",
        fork: false,
        url: "https://api.github.com/repos/A-poc/RedTeam-Tools",
        forks_url: "https://api.github.com/repos/A-poc/RedTeam-Tools/forks",
        keys_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/A-poc/RedTeam-Tools/teams",
        hooks_url: "https://api.github.com/repos/A-poc/RedTeam-Tools/hooks",
        issue_events_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/issues/events{/number}",
        events_url: "https://api.github.com/repos/A-poc/RedTeam-Tools/events",
        assignees_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/branches{/branch}",
        tags_url: "https://api.github.com/repos/A-poc/RedTeam-Tools/tags",
        blobs_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/languages",
        stargazers_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/stargazers",
        contributors_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/contributors",
        subscribers_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/subscribers",
        subscription_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/subscription",
        commits_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/A-poc/RedTeam-Tools/merges",
        archive_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/downloads",
        issues_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/labels{/name}",
        releases_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/A-poc/RedTeam-Tools/deployments",
        created_at: "2022-09-19T10:20:29Z",
        updated_at: "2024-09-10T11:56:40Z",
        pushed_at: "2023-08-08T20:30:03Z",
        git_url: "git://github.com/A-poc/RedTeam-Tools.git",
        ssh_url: "git@github.com:A-poc/RedTeam-Tools.git",
        clone_url: "https://github.com/A-poc/RedTeam-Tools.git",
        svn_url: "https://github.com/A-poc/RedTeam-Tools",
        homepage: "",
        size: 218,
        stargazers_count: 5803,
        watchers_count: 5803,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 795,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "cheatsheet",
          "cybersecurity",
          "enumeration",
          "hacking",
          "linux",
          "mitre-attack",
          "payload",
          "penetration-testing",
          "pentest",
          "pentest-tools",
          "red-team",
          "red-team-tools",
          "redteam",
          "resources",
          "security-tools",
          "tools",
          "windows",
        ],
        visibility: "public",
        forks: 795,
        open_issues: 0,
        watchers: 5803,
        default_branch: "main",
        score: 1.0,
      },
    ],
  };
}
