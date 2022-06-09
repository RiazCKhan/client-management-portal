const router = require('express').Router();
let Client = require('../models/clients.model');

router.route('/').get((req, res) => {
  Client.find()
    .then(clients => res.json(clients))
    .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/add').post((req, res) => {
  console.log('this is the request body', req.body)
})

module.exports = router;