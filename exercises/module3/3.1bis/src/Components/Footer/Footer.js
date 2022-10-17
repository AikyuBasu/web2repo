import { clearPage } from "../../utils/render";

const Footer = () => {
    clearPage();
    renderFooter();
}

function renderFooter(){
    const footer = document.querySelector('footer');
    footer.classList.add("text-center", "font-weight-bold", "py-2");
    const h6 = document.createElement('h6');
    h6.innerText = "This website is sponsored by kyukyuFactory™."
    footer.appendChild(h6);
}

export default Footer;