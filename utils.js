function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function getUserMarkup({ name, login, html_url }) {
  return `<h2>${name ? name : login}</h2><a href="${html_url}">@${login}</a>`;
}

function getStatsMarkup({ public_repos, followers, following }) {
  return `
          <li>
            <p class="stat__name">Repos</p>
            <p class="stat__value">${public_repos}</p>
          </li>
          <li>
            <p class="stat__name">Followers</p>
            <p class="stat__value">${followers}</p>
          </li>
          <li>
            <p class="stat__name">Following</p>
            <p class="stat__value">${following}</p>
          </li>
          `;
}
