var express = require('express');
const { isValidHttpUrl } = require('../helpers');
var router = express.Router();

const FILMS = [
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

// Read all the films from the collection
router.get('/', (req, res, next) => {
  console.log('GET /films');
  
 const orderByDuration =
    req?.query['minimum-duration']                      // ces "?" représentent la nullité ou non des parameters
      ? req.query['minimum-duration']                  // ce "?" est un opérateur ternaire
      : undefined;

  let filmsOrdered;
  console.log(`order by ${orderByDuration ?? 'not requested'}`);

  if (orderByDuration){
    filmsOrdered = [...FILMS].filter((element) => {
      return element.duration >= parseInt(req.query['minimum-duration'])
    });
    return res.json(filmsOrdered);
  } 
  return res.json(FILMS);
  // le ?? renvoie l'opérande de droite si gauche est NULL ou UNDEFINED.

});

router.get('/:id', (req,res,next) => {
  const id = req?.params?.id? req.params.id : undefined;
  console.log("id of parameter : " + id);

  if (!id) 
    return res.send("Index not Found");

  const foundIndex = FILMS.findIndex(film => film.id == id);
  if (foundIndex < 0) res.sendStatus(404);
  console.log("found index on table :" +foundIndex);
  const filmById = FILMS[foundIndex];
  console.log(filmById);

  return res.json(filmById);
});

// Create a film that will be added to the collection.
router.post('/', (req, res) => { 
  console.log('POST /films');
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;


  if (!title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'
  if (parseInt(duration) <= 0 || parseInt(budget) <= 0) return res.sendStatus(400);
  if (!isValidHttpUrl(link)) return res.sendStatus(400);


  const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link,
  };

  FILMS.push(newFilm);

  res.json(newFilm);
});

// Delete a pizza from the menu based on its id
router.delete('/:id', (req, res) => {
  console.log(`DELETE /movies/${req.params.id}`);

  const foundIndex = FILMS.findIndex(movie => movie.id == req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const itemsRemovedFromMenu = FILMS.splice(foundIndex, 1);
  const itemRemoved = itemsRemovedFromMenu[0];

  res.json(itemRemoved);
});

// Update a pizza based on its id and new values for its parameters
router.patch('/:id', (req, res) => {
  console.log(`PATCH /films/${req.params.id}`);

  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;


  if ((!title && !duration && !budget && !link) ||
      title?.length === 0 ||
      (parseInt(duration) <= 0 && parseInt(budget) <= 0) ||
      !isValidHttpUrl(link)) 
      return res.sendStatus(400);

  const foundIndex = FILMS.findIndex(film => film.id == req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const updatedFilm = {...FILMS[foundIndex], ...req.body};

  FILMS[foundIndex] = updatedFilm;

  res.json(updatedFilm);
});

module.exports = router;
