const router = require('express').Router();
let Admin = require('../models/admins.model');

// Create Admin
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  newAdmin = new Admin({
    username,
    password
  });

  newAdmin.save()
    .then(() => res.json('Admin Created!'))
    .catch((error) => res.status(400).json('Error: ' + error));
});

// Delete Admin
router.route('/delete/:id').delete((req, res) => {
  Admin.findByIdAndDelete(req.params.id)
    .then(() => res.json('Admin Deleted!'))
    .catch((error) => res.status(400).json('Error: ' + error));
});

module.exports = router;