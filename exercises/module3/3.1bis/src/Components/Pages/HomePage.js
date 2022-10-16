import { clearPage, renderImage } from "../../utils/render";
import interstellarImage from '../../img/interstellar.jpg'

const HomePage = () => {
  clearPage();
  renderHomePage();
};

function renderHomePage(){
  const main = document.querySelector('main');
  const divMOAT = document.createElement('div');
  divMOAT.classList.add('container');
  main.appendChild(divMOAT); 

  const h2 = document.createElement('h2');
  h2.innerText = 'The M.O.A.T (Movie of All Time)';
  divMOAT.appendChild(h2);

  renderImage(interstellarImage, divMOAT);


  const divFavMovies = document.createElement('div');
  divFavMovies.classList.add('container');
  const h22 = document.createElement('h2');
  h22.innerText = 'My favourite movies';
  divFavMovies.appendChild(h22);
  main.appendChild(divFavMovies);
};



export default HomePage;
