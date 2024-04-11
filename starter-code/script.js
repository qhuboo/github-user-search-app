const body = document.querySelector("body");
const form = document.querySelector("form");
const usernameInput = document.getElementById("username");

form.addEventListener("click", () => usernameInput.focus());

const searchResults = document.querySelector(".search-results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
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
  const noResults = document.getElementById("no-results");
  if (data.message === "Not Found") {
    noResults.classList.add("show");
    return;
  } else {
    usernameInput.blur();
    noResults.classList.remove("show");
  }
  const avatar = (document.getElementById("avatar_url").src = data.avatar_url);
  const name = (document.getElementById("name").innerHTML = data.name);
  const username_text = (document.getElementById(
    "username_text"
  ).innerHTML = `@${data.login}`);
  const timestamp = data.created_at;
  const date = new Date(timestamp);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  const joined = (document.getElementById(
    "joined"
  ).innerHTML = `Joined ${formattedDate}`);
  const bio = (document.getElementById("bio").innerHTML = data.bio
    ? data.bio
    : "No bio.");
  const repos = (document.getElementById("repos").innerHTML =
    data.public_repos);
  const followers = (document.getElementById("followers").innerHTML =
    data.followers);
  const following = (document.getElementById("following").innerHTML =
    data.following);
  const location = (document.getElementById("location").innerHTML =
    data.location ? data.location : "Not Available");
  const blog = (document.getElementById("blog").innerHTML = data.blog
    ? data.blog
    : "Not Available");
  const twitter_username = (document.getElementById(
    "twitter_username"
  ).innerHTML = data.twitter_username
    ? data.twitter_username
    : "Not Available");
  const company = (document.getElementById("company").innerHTML = data.company
    ? data.company
    : "Not Available");
}
