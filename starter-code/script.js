const body = document.querySelector("body");
const form = document.querySelector("form");
const searchResults = document.querySelector(".search-results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");
  const username = document.getElementById("username").value;
  getUser(username);
});

const themeButton = document.querySelector(".theme");

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});

async function getUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log(data);
  console.log(data.avatar_url);
  const avatar = document.createElement("img");
  avatar.src = data.avatar_url;
  searchResults.appendChild(avatar);
}

const sampleResponse = {
  login: "qhuboo",
  id: 15974718,
  node_id: "MDQ6VXNlcjE1OTc0NzE4",
  avatar_url: "https://avatars.githubusercontent.com/u/15974718?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/qhuboo",
  html_url: "https://github.com/qhuboo",
  followers_url: "https://api.github.com/users/qhuboo/followers",
  following_url: "https://api.github.com/users/qhuboo/following{/other_user}",
  gists_url: "https://api.github.com/users/qhuboo/gists{/gist_id}",
  starred_url: "https://api.github.com/users/qhuboo/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/qhuboo/subscriptions",
  organizations_url: "https://api.github.com/users/qhuboo/orgs",
  repos_url: "https://api.github.com/users/qhuboo/repos",
  events_url: "https://api.github.com/users/qhuboo/events{/privacy}",
  received_events_url: "https://api.github.com/users/qhuboo/received_events",
  type: "User",
  site_admin: false,
  name: "Jose Lopez Renteria",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 3,
  following: 17,
  created_at: "2015-11-23T04:46:39Z",
  updated_at: "2024-03-07T06:22:13Z",
};
