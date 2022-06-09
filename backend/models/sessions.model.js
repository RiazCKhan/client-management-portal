const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  anger_date: {
    type: Array,
    default: [Date]
  },
  relapse_date: {
    type: Array,
    default: [Date]
  },
  individual_date: {
    type: Array,
    default: [Date]
  },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;