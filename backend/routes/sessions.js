const router = require('express').Router();
let Session = require('../models/sessions.model');

// Create Session
router.route('/add').post((req, res) => {
  const angerManagement = req.body.anger;
  const relapsePrevention = req.body.relapse;
  const individualSession = req.body.individual;

  newSession = new Session({
    angerManagement,
    relapsePrevention,
    individualSession
  });

  newSession.save()
    .then(() => res.json('Session Created!'))
    .catch((error) => res.status(400).json('Error: ' + error));
});

// Delete Session
router.route('/delete/:id').delete((req, res) => {
  Session.findByIdAndDelete(req.params.id)
    .then(() => res.json('Session Deleted!'))
    .catch((error) => res.status(400).json('Error: ' + error));
});

module.exports = router;