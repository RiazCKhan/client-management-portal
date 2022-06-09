const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const therapistSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;