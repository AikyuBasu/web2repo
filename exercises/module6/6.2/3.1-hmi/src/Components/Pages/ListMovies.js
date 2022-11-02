import { clearPage } from '../../utils/render';

const ListMovies = async () => {
  clearPage();
  try {
    const films = await getAllMovies();
    renderTable(films);

  } catch (err){
    console.error('HomePage::error: ', err);
  }
};

async function getAllMovies(){
  const response = await fetch ('/api/films');
  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const films = await response.json();

    return films;
};

function renderTable(movies){
     
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
    table.appendChild(tbody);
    main.appendChild(table);
  }



export default ListMovies;