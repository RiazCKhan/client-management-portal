const router = require('express').Router();
let Therapist = require('../models/therapist.model');

// Create Admin
router.route('/create').post((req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;

  newTherapist = new Therapist({
    first_name,
    last_name
  });

  newTherapist.save()
    .then(() => res.json('Therapist Created!'))
    .catch((error) => res.status(400).json('Error: ' + error));
});

// Delete Therapist
router.route('/delete/:id').delete((req, res) => {
  Therapist.findByIdAndDelete(req.params.id)
    .then(() => res.json('Therapist Deleted!'))
    .catch((error) => res.status(400).json('Error: ' + error));
});

module.exports = router;