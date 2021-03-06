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
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const newClient = new Client({
    firstName,
    lastName
  });

  newClient.save()
    .then(() => res.json('Client Added!'))
    .catch((error) => res.status(400).json('Error: ' + error));
});

// Update Client Details
router.route('/update/:id').patch((req, res) => {

  Client.findById(req.params.id)
    .then((client) => {
      client.angerSessionTotal = req.body.angerCount;
      client.relapseSessionTotal = req.body.relapseCount;
      client.individualSessionTotal = req.body.individualCount;
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