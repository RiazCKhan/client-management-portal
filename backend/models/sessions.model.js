const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  anger: {
    type: Array,
    default: [Date]
  },
  relapse: {
    type: Array,
    default: [Date]
  },
  individual: {
    type: Array,
    default: [Date]
  },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;