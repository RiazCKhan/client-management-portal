const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  angerSessionTotal: { type: Number },
  relapseSessionTotal: { type: Number },
  individualSessionTotal: { type: Number },
  complete: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  therapist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Therapist' }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;