import places from "../../utils/places";
import { clearPage } from "../../utils/render";

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');
  main.appendChild(renderPlacesToVisit());
};

function renderPlacesToVisit(){
  const wrapper = document.createElement('div');
  wrapper.className = "text-center";
  const h1 = document.createElement('h1');
  h1.innerText = 'Places to visit!';
  wrapper.appendChild(h1);

  const list = document.createElement('ul');
  list.style = "list-style: none";
  places.forEach(place => {
    const li = document.createElement('li');
    li.innerText = place.name;
    list.appendChild(li);
  })

  wrapper.appendChild(list);

  return wrapper;
}

export default HomePage;
