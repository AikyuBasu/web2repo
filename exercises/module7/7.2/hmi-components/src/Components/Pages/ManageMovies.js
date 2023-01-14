import { getAuthenticatedUser } from '../../utils/auths';
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

    tr.innerHTML = `
    <td class="fw-bold text-primary" contenteditable="true">${currentElement.title}</td>
    <td class="text-primary" contenteditable="true"><a href="${currentElement.link}">${currentElement.link}</a></td>
    <td class="text-primary" contenteditable="true">${currentElement.duration}</td>
    <td class="text-primary" contenteditable="true">${currentElement.budget}</td>
    `

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
  const user = getAuthenticatedUser();
  console.log(user);

   const id = parseInt(e.target.parentElement.getAttribute('data-attribute'), 10);
   const response = await fetch(`/api/films/${id}`, {
    method: 'DELETE',
    headers:{
      'Authorization': user.token
    },
    
  });

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
  ManageMovies();
};

async function saveModificationsMovie(e) {
  const film = e.target.parentElement.parentElement;
  const id = parseInt(e.target.parentElement.getAttribute('data-attribute'), 10);
  const user = getAuthenticatedUser();
  console.log(user);

  const response = await fetch(`/api/films/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: film.children[0].innerText,
      link: film.children[1].children[0].innerText,
      duration: parseInt(film.children[2].innerText, 10),
      budget: parseInt(film.children[3].innerText, 10), 
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    },
  });

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  ManageMovies(); // pas bon. il faut rappeler la première fonction.
};



export default ManageMovies;