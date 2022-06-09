const router = require('express').Router();
let Client = require('../models/clients.model');

router.route('/').get((req, res) => {
  Client.find()
    .then(clients => res.json(clients))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/add').post((req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;

  const newClient = new Client({
    firstName,
    lastName
  });

  newClient.save()
  .then(() => res.jdon('Client Added!'))
  .catch((error) => res.status(400).json('Error: ' + error))
})

module.exports = router;