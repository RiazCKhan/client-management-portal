const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  anger: {
    type: Date,
  },
  relapse: {
    type: Date
  },
  individual: {
    type: Date,
  },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;