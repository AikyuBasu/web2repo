const express = require('express');
const { randomUUID } = require('node:crypto');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const router = express.Router();

const jsonDbPath = path.join(__dirname, '/../data/places.json');

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.sendStatus(201);
});

router.post('/', (req, res) => {
  const name = req?.body?.name?.trim().length !== 0 ? req.body.name : undefined;
  const description = req?.body?.description?.trim().length !== 0
    ? req.body.description : undefined;

  if (!name || !description) return res.sendStatus(400); // error code '400 Bad request'

  const places = parse(jsonDbPath);

  const newPlace = {
    name,
    description,
    id: randomUUID(),
  };

  places.push(newPlace);

  serialize(jsonDbPath, places);

  return res.json(newPlace);
});

module.exports = router;
