const resultEl = document.querySelector(".result");
const avatarEl = document.querySelector(".avatar img");
const usernameEl = document.querySelector(".username");
const joinedEl = document.querySelector(".joined");
const bioEl = document.querySelector(".bio");
const statsEl = document.querySelector(".stats");

const locationEl = document.querySelector(".location");
const twitterEl = document.querySelector(".twitter");
const blogEl = document.querySelector(".blog");
const companyEl = document.querySelector(".company");

const searchEl = document.querySelector("#search");

function renderData(data) {
  if (!data) throw new Error("Error!");
  if (data.status === "404") throw new Error(data.message);

  avatarEl.src = data.avatar_url;
  usernameEl.innerHTML = getUserMarkup(data);
  joinedEl.innerText = "Joined " + formatDate(new Date(data.created_at));
  if (data.bio) bioEl.innerText = data.bio;
  statsEl.innerHTML = getStatsMarkup(data);

  locationEl.innerText = data.location ? data.location : "Not Available";
  twitterEl.innerText = data.twitter_username
    ? data.twitter_username
    : "Not Available";
  blogEl.innerText = data.blog ? data.blog : "Not Available";
  companyEl.innerText = data.company ? data.company : "Not Available";
  blogEl.innerText = data.blog ? data.blog : "Not Available";
  blogEl.href = data.blog ? data.blog : "#";
}

(function () {
  const params = new URLSearchParams(document.location.search);
  const search = params.get("search");

  if (!search) return (resultEl.style.opacity = 1);

  resultEl.style.opacity = 0;
  fetch("https://api.github.com/users/" + search)
    .then((res) => res.json())
    .then(renderData)
    .catch((e) => {
      console.log("Error: " + e.message);
      document.body.dataset.notfound = "true";
      searchEl.value = search;
    })
    .finally(() => (resultEl.style.opacity = 1));
})();
