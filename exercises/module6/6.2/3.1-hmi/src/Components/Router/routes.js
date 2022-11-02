import HomePage from '../Pages/HomePage';
import AddMovie from '../Pages/AddMovie';
import ListMovies from '../Pages/ListMovies';
import UpdateMovie from '../Pages/UpdateMovie';

const routes = {
  '/': HomePage,
  '/add-movie': AddMovie,
  '/list-movies': ListMovies,
  '/update-movie': UpdateMovie,
};

export default routes;
