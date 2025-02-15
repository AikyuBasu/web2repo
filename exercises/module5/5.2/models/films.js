const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');

const defaultFilms = [
    {
        id: 1,
        title: 'Harry Potter and the Philosopher\'s Stone',
        duration: 152,
        budget: 125,
        link: "https://fr.wikipedia.org/wiki/Harry_Potter_à_l%27école_des_sorciers_(film)",
      },
      {
        id: 2,
        title: 'Forrest Gump',
        duration: 142,
        budget: 55,
        link: "https://en.wikipedia.org/wiki/Forrest_Gump",
      },
];

function readAllFilms(filter) {
    const orderByDuration =
    filter['minimum-duration'] ?? undefined;

    let filmsOrdered;

    const films = parse(jsonDbPath, defaultFilms);

  if (orderByDuration){
    filmsOrdered = [...films].filter((element) => element.duration >= parseInt(filter['minimum-duration'], 10));
    return filmsOrdered;
  } 
  return films;
}

function readOneFilm(id) {
  const idNumber = parseInt(id, 10);
  
  const films = parse(jsonDbPath, defaultFilms);

  const foundIndex = films.findIndex(film => film.id === idNumber);
  if (foundIndex < 0) return undefined;
  return films[foundIndex];
}

function createOneFilm(title, duration, budget, link) {
  const films = parse(jsonDbPath, defaultFilms);

  const createdFilm = {
    id: getNextId(),
    title,
    duration,
    budget, 
    link,
  };

  films.push(createdFilm);

  serialize(jsonDbPath, films);

  return createdFilm;
}

function getNextId() {
  const films = parse(jsonDbPath, defaultFilms);
  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = films[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function deleteOneFilm(id) {
  const idNumber = parseInt(id, 10);
  const films = parse(jsonDbPath, defaultFilms);
  const foundIndex = films.findIndex((film) => film.id === idNumber);
  if (foundIndex < 0) return undefined;
  const deletedFilms = films.splice(foundIndex, 1);
  const deletedFilm = deletedFilms[0];
  serialize(jsonDbPath, films);

  return deletedFilm;
}

function updateOneFilm(id, updatedParams) {
  const idNumber = parseInt(id, 10);
  const films = parse(jsonDbPath, defaultFilms);
  const foundIndex = films.findIndex((film) => film.id === idNumber);
  if (foundIndex < 0) return undefined;

  const updatedFilm = { ...films[foundIndex], ...updatedParams };

  films[foundIndex] = updatedFilm;

  serialize(jsonDbPath, films);

  return updatedFilm;
}

module.exports = {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updateOneFilm,
};