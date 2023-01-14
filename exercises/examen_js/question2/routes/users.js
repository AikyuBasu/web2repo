const express = require('express');
const { randomUUID } = require('node:crypto');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const router = express.Router();

const jsonDbPath = path.join(__dirname, '/../data/users.json');
const jsonDbPathPlaces = path.join(__dirname, '/../data/places.json');

/* GET users listing. */
router.get('/', (req, res) => {
  const users = parse(jsonDbPath);
  return res.json(users);
});

/* POST add an user */
router.post('/', (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;

  // todo contraintes sur lemail
  if (!email || !username) return res.sendStatus(400);

  const users = parse(jsonDbPath);
  let found = false;
  users.forEach((u) => {
    if (u.email === email) {
      found = true;
    }
  });

  if (found) return res.sendStatus(400);

  const newUser = {
    id: randomUUID(),
    username,
    email,
    likedPlaces: [],
  };

  users.push(newUser);

  serialize(jsonDbPath, users);

  return res.json(newUser);
});

router.patch('/like', (req, res) => {
  const users = parse(jsonDbPath);
  const places = parse(jsonDbPathPlaces);
  if (!users || !places) return res.sendStatus(390);
  const userEmail = req?.query?.user ? req.query.user : undefined;
  const placeId = req?.body?.id ? req.body.id : undefined;

  if (!userEmail || !placeId || placeId.length === 0) return res.sendStatus(391);

  let placeFound;
  places.forEach((plc) => {
    if (plc.id === placeId) placeFound = plc;
  });

  if (!placeFound) return res.sendStatus(392);
  let userFound;
  let placeAlreadyLiked = false;
  users.forEach((usr) => {
    if (usr.email === userEmail) {
      if (usr.likedPlaces.includes(placeFound.name)) placeAlreadyLiked = true;
      usr.likedPlaces.push(placeFound.name);
      userFound = usr;
    }
  });

  if (placeAlreadyLiked || !userFound) return res.sendStatus(393);

  serialize(jsonDbPath, users);

  return res.json(userFound);
});

module.exports = router;
