import { clearPage } from '../../utils/render';

const HomePage = async () => {
  clearPage();
  try {
    const places = await getAllPlaces();
    renderPlaces(places);
    const favPlace = await getFavPlace();
    renderFavPlace(favPlace);
  } catch (err) {
    console.error('HomePage::error: ', err);
  }
};

async function getAllPlaces() {
  const response = await fetch('https://places-exam-api.azurewebsites.net/places');
  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const places = await response.json();

  return places;
}

async function getFavPlace() {
  const response = await fetch('https://places-exam-api.azurewebsites.net/recommended');
  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const place = await response.json();

  return place;
}

function renderPlaces(places) {
  const main = document.querySelector('main');
  const wrapper = document.createElement('div');
  wrapper.className = 'text-center';
  const h1 = document.createElement('h1');
  h1.innerText = 'Places to visit!';
  wrapper.appendChild(h1);

  const list = document.createElement('ul');
  list.style = 'list-style: none';
  places.forEach((place) => {
    const li = document.createElement('li');
    li.innerText = place.name;
    list.appendChild(li);
  });

  wrapper.appendChild(list);

  main.appendChild(wrapper);
}

function renderFavPlace(place) {
  const main = document.querySelector('main');
  const wrapper = document.createElement('div');
  wrapper.className = 'text-center';
  const h2 = document.createElement('h2');
  h2.innerText = `Recommended place : ${place.name}`;
  wrapper.appendChild(h2);
  main.appendChild(wrapper);
}

export default HomePage;
