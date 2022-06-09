const router = require('express').Router();
let Client = require('../models/clients.model');

// Retrieve All Clients
router.route('/').get((req, res) => {
  Client.find()
    .then(clients => res.json(clients))
    .catch(error => res.status(400).json('Error: ' + error));
});

// Retrieve Single Client
router.route('/:id').get((req, res) => {
  Client.findById(req.params.id)
    .then(client => res.json(client))
    .catch(error => res.status(400).json('Error: ' + error));
});

// Create New CLient
router.route('/add').post((req, res) => {
  const first_name = req.body.firstname;
  const last_name = req.body.lastname;

  const newClient = new Client({
    first_name,
    last_name
  });

  newClient.save()
    .then(() => res.json('Client Added!'))
    .catch((error) => res.status(400).json('Error: ' + error));
});

// Update Client Details
router.route('/update/:id').patch((req, res) => {

  console.log(req.body);

  Client.findById(req.params.id)
    .then((client) => {
      client.anger_count = req.body.anger_count;
      client.relapse_count = req.body.relapse_count;
      client.individual_count = req.body.individual_count;
      client.complete = req.body.complete;

      client.save()
        .then(() => res.json('Client Updated!'))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch((error) => res.status(400).json('Error: ' + error));
});

// Will Remove 'Active Status'
router.route('/delete/:id').delete((req, res) => {
  Client.findById(req.params.id)
    .then((client) => {
      client.active = req.body.complete;

      client.save()
        .then(() => res.json('Client Inactive!'))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch((error) => res.status(400).json('Error: ' + error));
});

module.exports = router;

// "62a261d7a868f9a1e75e9da1"