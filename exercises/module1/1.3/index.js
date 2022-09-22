let count = 0;
const clicker = document.querySelector("#second-p");
const message = document.querySelector("h1");

clicker.addEventListener("click", () => {
    clicker.innerText = ++count;
    if (count >= 5 && count < 10){
        message.innerText = "Bravo, bel échauffement !"
    } else if (count >= 10) message.innerText = "Vous êtes passé maître en l'art du clic !"
});



