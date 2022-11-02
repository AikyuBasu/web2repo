import { clearPage } from '../../utils/render';

const ManageMovies = async () => {
  clearPage();
  try {
    const films = await getAllMovies();
    renderTable(films);

  } catch (err) {
    console.error('HomePage::error: ', err);
  }
};

async function getAllMovies() {
  const response = await fetch('/api/films');
  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const films = await response.json();

  return films;
};

function renderTable(movies) {

  const main = document.querySelector('main');
  const table = document.createElement('table');
  table.className = 'mt-5 mb-5 container table table-bordered border-dark';
  table.innerHTML = `
    <thead>
        <tr>
            <th>Title</th>
            <th>Link</th>
            <th>Duration (min)</th>
            <th>Budget (million)</th>
        </tr>
    </thead>`;
  const tbody = document.createElement('tbody');

  movies.forEach((currentElement) => {
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    title.innerText = currentElement.title;
    tr.appendChild(title);

    const linkCell = document.createElement('td');
    const link = document.createElement('a');
    link.href = currentElement.link;
    link.innerText = currentElement.link;
    linkCell.appendChild(link);
    tr.appendChild(linkCell);


    const duration = document.createElement('td');
    duration.innerText = currentElement.duration;
    tr.appendChild(duration);

    const budget = document.createElement('td');
    budget.innerText = currentElement.budget;
    tr.appendChild(budget);

    const buttonsWrapper = document.createElement('td');
    buttonsWrapper.setAttribute('data-attribute', currentElement.id);
    const deleteButton = document.createElement('button');
    deleteButton.classList = 'b';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteMovie);

    const saveButton = document.createElement('button');
    saveButton.classList = 'b';
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', saveModificationsMovie);      

    buttonsWrapper.appendChild(deleteButton);
    buttonsWrapper.appendChild(saveButton);
    tr.appendChild(buttonsWrapper);

    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  main.appendChild(table);
};

async function deleteMovie(e) {
  const id = parseInt(e.target.parentElement.getAttribute('data-attribute'), 10);
  

   const response = await fetch(`/api/films/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const main = document.querySelector('main');
  const h1 = document.createElement('h1');
  h1.className = "container";
  h1.innerText = 'Movie deleted successfully.';

  main.appendChild(h1);
  
  window.location.reload();
};

async function saveModificationsMovie(e) {
  const film = e.target.parentElement.parentElement;
  console.log(film);
};



export default ManageMovies;