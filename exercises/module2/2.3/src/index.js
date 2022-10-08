import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

const main = document.querySelector('main');

const submitBtn = document.getElementById("contactForm");


submitBtn.addEventListener('submit', (e) => {
    const nbRows = document.getElementById('numberOfLines').value,
    nbColumns = document.getElementById('numberOfColumns').value,
    baseStr = document.getElementById('initialString').value;

    const tableOfElements = createArray(nbRows, nbColumns, baseStr);
    createHtmlTableAsString(tableOfElements);
    e.preventDefault();
} ) 

function createArray(nbRows, nbColumns, baseStr){
    const arrayStrDeuxDim = [];
    for (let i = 0; i < nbRows; i+=1){
        const arrayInside = [];
        for (let j = 0; j < nbColumns; j+=1){
            arrayInside.push(`${baseStr}[${i}][${j}]`)
        }
        arrayStrDeuxDim.push(arrayInside);
    }

    return arrayStrDeuxDim;
 }

 function createHtmlTableAsString(arrayCreated){
    const tableWrapper = document.createElement('div');
    tableWrapper.className = "container centered";
    const table = document.createElement('table');
    table.className = "table table-bordered";

    arrayCreated.forEach((currentElement) => {
        const tr = document.createElement('tr');
        tr.className = "border";
        currentElement.forEach((value) => {
            const td = document.createElement('td');
            td.innerText = value;
            td.className = "border text-light";
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    tableWrapper.appendChild(table);
    main.appendChild(tableWrapper); 
 }


 