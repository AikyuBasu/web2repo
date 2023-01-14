import HomePage from '../Pages/HomePage';
import AddMovie from '../Pages/AddMovie';
import ManageMovies from '../Pages/ManageMovies';
import Logout from '../Logout/Logout';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const routes = {
  '/': HomePage,
  '/add-movie': AddMovie,
  '/manage-movies': ManageMovies,
  '/login': LoginPage,
  '/logout': Logout,
  '/register': RegisterPage,
};

export default routes;
