import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const registeredMovies = [
  
];


const RegisterMovies = () => {
  clearPage();
  renderAddForm();
  renderGoBackHomeButton();
};

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  addOneMovie();
  e.preventDefault();
});

function renderAddForm(){
  const main = document.querySelector('main');
  main.innerHTML = `<div class="container px-5 my-5">
  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
  <div class="form-floating mb-3">
  <input class="form-control" id="title" type="text" placeholder="Title" data-sb-validations="required" />
  <label for="title">Title</label>
  <div class="invalid-feedback" data-sb-feedback="title:required">Title is required.</div>
  </div>
  <div class="form-floating mb-3">
          <input class="form-control" id="duration" type="text" placeholder="Duration" data-sb-validations="required" />
          <label for="duration">Duration</label>
          <div class="invalid-feedback" data-sb-feedback="duration:required">Duration is required.</div>
          </div>
          <div class="form-floating mb-3">
          <input class="form-control" id="budget" type="text" placeholder="Budget" data-sb-validations="required" />
          <label for="budget">Budget</label>
          <div class="invalid-feedback" data-sb-feedback="budget:required">Budget is required.</div>
          </div>
          <div class="form-floating mb-3">
          <input class="form-control" id="link" type="text" placeholder="Link" data-sb-validations="required" />
          <label for="link">Link</label>
          <div class="invalid-feedback" data-sb-feedback="link:required">Link is required.</div>
          </div>
          <div class="d-none" id="submitSuccessMessage">
          <div class="text-center mb-3">
          <div class="fw-bolder">Form submission successful!</div>
          <p>To activate this form, sign up at</p>
          <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
          </div>
          </div>
          <div class="d-none" id="submitErrorMessage">
          <div class="text-center text-danger mb-3">Error sending message!</div>
          </div>
          <div class="d-grid">
          <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
          </div>
          </form>
          </div>
          <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>`
        };
        
function addOneMovie(){
  registeredMovies.push({});
};

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

export default RegisterMovies;
