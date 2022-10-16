import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import { allMovies } from '../../utils/movies';

const ListMovies = () => {
  clearPage();
  renderTable();
  renderGoBackHomeButton();
};

function renderTable(){
    const movies = allMovies();
    const main = document.querySelector('main');
    const table = document.createElement('table');
    table.className = 'mt-5 mb-5 container table table-bordered border-dark';
    table.innerHTML = `
    <thead>
        <tr>
            <th>Title</th>
            <th>Duration (min)</th>
            <th>Budget (million)</th>
        </tr>
    </thead>`;
    const tbody = document.createElement('tbody');
    movies.forEach((currentElement) => {
        const tr = document.createElement('tr');
        const title = document.createElement('td');
        const link = document.createElement('a');

        link.href = currentElement.link;
        link.innerText = currentElement.title;
        title.appendChild(link);
        tr.appendChild(title);
        
        const duration = document.createElement('td');
        duration.innerText = currentElement.duration;
        tr.appendChild(duration);

        const budget = document.createElement('td');
        budget.innerText = currentElement.budget;
        tr.appendChild(budget);
        tbody.appendChild(tr);
    });
    main.appendChild(tbody);
  }

function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  const submit = document.createElement('input');
  submit.value = 'Go back to HomePage';
  submit.className = 'btn btn-secondary mt-3';
  submit.addEventListener('click', () => {
    Navigate('/');
  });

  main.appendChild(submit);
}

export default ListMovies;