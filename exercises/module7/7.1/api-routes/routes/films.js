const express = require('express');
const { isValidHttpUrl } = require('../helpers');
const { authorize } = require('../utils/auths');

const router = express.Router();

const {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updateOneFilm,
} = require('../models/films');


// Read all the films from the collection, potentially filtered by minimum duration
// eslint-disable-next-line arrow-body-style
router.get('/', (req, res) => {
  return res.json(readAllFilms(req.query));
});

// Read the film identified by its id
router.get('/:id', (req,res) => {
  const film = readOneFilm(req.params.id);
  if (!film) res.sendStatus(404);
  return res.json(film);
});

// Create a film that will be added to the collection.
router.post('/', authorize, (req, res) => { 
  // les parametres passés au modele doivent etre vérifiés avant par le router ssi cela entrave la bonne utilisation de ce dernier
  // le model traite des données correctes en théorie

  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;


  if (!title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'
  if (parseInt(duration, 10) <= 0 || parseInt(budget, 10) <= 0) return res.sendStatus(400);
  if (!isValidHttpUrl(link)) return res.sendStatus(400);

  return res.json(createOneFilm(title, duration, budget, link));
});

// Delete a film from the collection based on its id
router.delete('/:id', authorize, (req, res) => {
  const deletedFilm = deleteOneFilm(req.params.id);

  if (!deletedFilm) return res.sendStatus(404);

  return res.json(deletedFilm);
});

// Update a movie based on its id and new values for its parameters
router.patch('/:id', authorize, (req, res) => {

  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;


  if ((!title && !duration && !budget && !link) ||
      title?.length === 0 ||
      (parseInt(duration,10) <= 0 && parseInt(budget,10) <= 0) ||
      !isValidHttpUrl(link)) 
      return res.sendStatus(400);

      const updatedFilm = updateOneFilm(req.params.id, { title, duration, budget, link });

      if (!updatedFilm) return res.sendStatus(404);
    
      return res.json(updatedFilm);
});

module.exports = router;
