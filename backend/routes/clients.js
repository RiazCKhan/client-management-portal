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
  Client.findById(req.params.id)
    .then((client) => {
      client.anger_count = req.body.anger_count;
      client.relapse_count = req.body.relapse_count;
      client.individual_count = req.body.individual_count;
      client.complete = req.body.complete;
    })
    .catch((error) => res.status(400).json('Error: ' + error));
});

router.route('/:id').delete((req, res) => {

});

module.exports = router;

// first_name: { type: String, required: true, trim: true },
// last_name: { type: String, required: true, trim: true },
// anger_count: { type: Number },
// relapse_count: { type: Number },
// individual_count: { type: Number },
// complete: { type: Boolean, default: false },