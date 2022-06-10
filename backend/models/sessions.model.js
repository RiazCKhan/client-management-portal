const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  angerManagement: {
    type: Date,
  },
  relapsePrevention: {
    type: Date
  },
  individualSession: {
    type: Date,
  },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;