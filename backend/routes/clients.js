const router = require('express').Router();
let Client = require('../models/clients.model');

router.route('/').get((req, res) => {
  Client.find()
    .then(clients => res.json(clients))
    .catch(error => res.status(400).json('Error: ' + error))
});
