import { clearPage } from '../../utils/render';
import { addMovie } from '../../utils/movies';

const AddMovie = () => {
  clearPage();
  renderAddForm();
  onSubmitMovie();
};

function renderAddForm(){
  const main = document.querySelector('main');
  main.innerHTML = `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <h1 class="container text-center">Add a Movie</h1>
  <form class="mt-5 container border border-dark" id="formMovie">
    <div class="form-group row mt-2">
      <label for="title" class="col-4 col-form-label">Title</label> 
      <div class="col-8">
        <input id="title" name="title" type="text" class="form-control" required="required">
      </div>
    </div>
    <div class="form-group row">
      <label for="duration" class="col-4 col-form-label">Duration</label> 
      <div class="col-8">
        <input id="duration" name="duration" type="text" class="form-control" required="required">
      </div>
    </div>
    <div class="form-group row">
      <label for="budget" class="col-4 col-form-label">Budget</label> 
      <div class="col-8">
        <input id="budget" name="budget" type="text" class="form-control" required="required">
      </div>
    </div>
    <div class="form-group row">
      <label for="link" class="col-4 col-form-label">Link</label> 
      <div class="col-8">
        <input id="link" name="link" type="text" class="form-control" required="required">
      </div>
    </div> 
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>`
        };
        
function onSubmitMovie(){
  const form = document.getElementById('formMovie');
  form.addEventListener('submit', (e) => {
    const newMovie = {
        title: document.getElementById('title').value,
        duration: document.getElementById('duration').value,
        budget: document.getElementById('budget').value,
        link: document.getElementById('link').value
    }
    addMovie(newMovie);
    e.preventDefault();
    const main = document.querySelector('main');
    const h1 = document.createElement('h1');
    h1.className = "container";
    h1.innerText = 'Thank you !';
    main.appendChild(h1);
  });
}; 


export default AddMovie;