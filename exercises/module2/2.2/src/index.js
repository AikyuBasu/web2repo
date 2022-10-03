import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import interstellarImage from './img/interstellar.jpg'
import forrest from './img/OIP.jpg' 
import logo from './img/rouleau.png'

const mainWrapper = document.querySelector('main');

// header

const header = document.querySelector('header');
const imgForrest = document.createElement('img');
imgForrest.src = forrest;
imgForrest.id = 'max-image';
header.appendChild(imgForrest);

const divLogo = document.createElement('div');
divLogo.classList.add('wrapper','m-4');

const imgLogo = document.createElement('img');
imgLogo.src = logo;
imgLogo.id = 'logo';
divLogo.appendChild(imgLogo);

const h1 = document.createElement('h1');
h1.innerText = "myMovies";
h1.classList.add('mt-4','mx-4');
divLogo.appendChild(h1);


header.appendChild(divLogo);

// MAIN

const divMOAT = document.createElement('div');
divMOAT.classList.add('container');
mainWrapper.appendChild(divMOAT);

const h2 = document.createElement('h2');
h2.innerText = 'The M.O.A.T (Movie of All Time)';
divMOAT.appendChild(h2);

renderImage(interstellarImage, divMOAT);


const divFavMovies = document.createElement('div');
divFavMovies.classList.add('container');
const h22 = document.createElement('h2');
h22.innerText = 'My favourite movies';
divFavMovies.appendChild(h22);
mainWrapper.appendChild(divFavMovies);

// footer
const footer = document.querySelector('footer');
footer.classList.add("text-center", "font-weight-bold", "py-2");
const h6 = document.createElement('h6');
h6.innerText = "This website is sponsored by kyukyuFactory™."
footer.appendChild(h6);

// functions 

function renderImage(url, wrapper) {
    const image = document.createElement('img');
    image.src = url;
    wrapper.appendChild(image);
}

// idee de refactoring : améliorer le renderImage pour qu'il puisse fonctionner pour toutes les images imaginables (ajout de parametre id,...)