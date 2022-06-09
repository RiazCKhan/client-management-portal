const router = require('express').Router();
let Client = require('../models/clients.model');

router.route('/').get((req, res) => {
  Client.find()
    .then(clients => res.json(clients))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/:id').get((req, res) => {
  Client.findById(req.params.id)
    .then(client => res.json(client))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/add').post((req, res) => {
  const first_name = req.body.firstname;
  const last_name = req.body.lastname;

  const newClient = new Client({
    first_name,
    last_name
  });

  newClient.save()
    .then(() => res.json('Client Added!'))
    .catch((error) => res.status(400).json('Error: ' + error))
})

router.route('/update/:id').put((req, res) => {

});

router.route('/:id').delete((req, res) => {

});

module.exports = router;