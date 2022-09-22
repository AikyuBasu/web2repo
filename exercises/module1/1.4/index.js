const redLight = document.querySelector(".red");
const orangeLight = document.querySelector(".orange");
const greenLight = document.querySelector(".green");
var myInterval;

startLights();

function startLights(){
    myInterval = setInterval(switchLights,2000);
};

let direction;

function switchLights() {
    if (!redLight.style.backgroundColor && !orangeLight.style.backgroundColor && !greenLight.style.backgroundColor){
        direction = "down";
        redLight.style.backgroundColor = "red";

    } else if (redLight.style.backgroundColor){
        if (direction === "up") direction = "down";
            redLight.style.backgroundColor = null;
            orangeLight.style.backgroundColor = "orange";
        } 

        else if (orangeLight.style.backgroundColor){
            orangeLight.style.backgroundColor = null;
            if (direction === "up") redLight.style.backgroundColor = "red";
            else greenLight.style.backgroundColor = "green";

        } else if (greenLight.style.backgroundColor){
            if (direction === "down") direction = "up";
            greenLight.style.backgroundColor = null;
            orangeLight.style.backgroundColor = "orange";
        }
    }

// autre solution : un array avec rouge, orange, vert, orange
// ensuite itérer dessus avec un forEach (regarder la solution) & faire une fonction récursive
