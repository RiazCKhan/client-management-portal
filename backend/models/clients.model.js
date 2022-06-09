const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  anger_count: { type: Number },
  relapse_count: { type: Number },
  individual_count: { type: Number },
  complete: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  therapist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Therapist' }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;