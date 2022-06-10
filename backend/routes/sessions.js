const router = require('express').Router();
let Session = require('../models/sessions.model');

// Create Session
router.route('/create').post((req, res) => {
  const anger = req.body.anger;
  const relapse = req.body.relapse;
  const individual = req.body.individual;

  newSession = new Session({
    anger,
    relapse,
    individual
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