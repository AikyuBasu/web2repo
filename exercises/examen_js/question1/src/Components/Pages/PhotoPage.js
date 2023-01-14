import places from "../../utils/places";
import { clearPage } from '../../utils/render';

let index = 2;

const PhotoPage = () => {
  clearPage();
  const main = document.querySelector('main');
  main.appendChild(renderCarrousel());
  renderCarrousel();
};

/* function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  const submit = document.createElement('input');
  submit.value = 'Go back to HomePage';
  submit.className = 'btn btn-secondary mt-3';
  submit.addEventListener('click', () => {
    Navigate('/');
  });

  main.appendChild(submit);
}
*/

function renderCarrousel(){
  const wrapper = document.createElement('div');
  wrapper.className = "text-center";
  const img = document.createElement('img');
  img.src = places[index].image;
  wrapper.appendChild(img);
  const h1 = document.createElement('h1');
  h1.innerText = places[index].name;
  wrapper.appendChild(h1);

  const btnWrapper = document.createElement('div');
  const previous = document.createElement('input');
  previous.value = 'Previous';
  previous.className = 'btn btn-secondary mt-3';
  previous.addEventListener('click', () => {
    if (index === 0) index = places.length-1; 
    else index-=1;
    img.src = places[index].image;
    h1.innerText = places[index].name;
  });

  btnWrapper.appendChild(previous);

  const next = document.createElement('input');
  next.value = 'Next';
  next.className = 'btn btn-primary mt-3';
  next.addEventListener('click', () => {
    index = (index + 1) % places.length;
    img.src = places[index].image;
    h1.innerText = places[index].name;
  });

  btnWrapper.appendChild(next);

  wrapper.appendChild(btnWrapper);

  return wrapper;

}

export default PhotoPage;
