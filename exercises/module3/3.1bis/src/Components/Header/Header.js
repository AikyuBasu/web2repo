import { clearPage } from "../../utils/render";
import forrest from '../../img/OIP.jpg' 
import logo from '../../img/rouleau.png'

const Header = () => {
    clearPage();
    renderHeader();
};

function renderHeader(){
    const header = document.querySelector('header');
    const imgForrest = document.createElement('img');
    imgForrest.src = forrest;
    imgForrest.id = 'max-image';
    header.appendChild(imgForrest);

    const divLogo = document.createElement('div');
    divLogo.classList.add('wrapper', 'm-4');

    const imgLogo = document.createElement('img');
    imgLogo.src = logo;
    imgLogo.id = 'logo';
    divLogo.appendChild(imgLogo);

    const h1 = document.createElement('h1');
    h1.innerText = "myMovies";
    h1.classList.add('mt-4', 'mx-4');
    divLogo.appendChild(h1);


    header.appendChild(divLogo);
};

export default Header;