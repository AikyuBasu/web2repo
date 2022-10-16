import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const ListMovies = () => {
  clearPage();
  renderTable();
  renderGoBackHomeButton();
};

function renderTable(){
    const main = document.querySelector('main');
    main.innerHTML = `<table class="mt-5 mb-5 container table table-bordered border-dark">
    <thead>
      <tr>
        <th>Title</th>
        <th>Duration (min)</th>
        <th>Budget (million)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="https://www.imdb.com/title/tt0241527/">Harry Potter and the Philosopher's Stone</a>
        </td>
        <td>152</td>
        <td>125</td>
      </tr>
      <tr>
        <td>
          <a href="https://en.wikipedia.org/wiki/Avengers:_Endgame">Avengers: Endgame</a>
        </td>
        <td>181</td>
        <td>181</td>
      </tr>
      <tr>
        <td>…</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>`
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