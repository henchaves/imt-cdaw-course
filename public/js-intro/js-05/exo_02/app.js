const API_URL = "https://api.jikan.moe/v4/anime";

const titles = document.querySelectorAll(".title");
let currentData = {};

async function fetchApi(animeId) {
  const response = await fetch(`${API_URL}/${animeId}`);
  const json = await response.json();
  const data = json.data;
  return { ...data }
}

async function handleClick(e) {
  const animeId = e.target.parentNode.dataset.anime;
  const animeData = await fetchApi(animeId);
  const p = e.target.nextSibling.nextSibling;
  p.innerHTML = animeData.synopsis;
  p.toggleAttribute("hidden");
}


Array.from(titles).forEach(title => {
  title.addEventListener("click", handleClick)
})

