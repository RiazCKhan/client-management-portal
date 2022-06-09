const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  anger_date: {
    type: Array,
    default: [Date]
  },
  relapse_date: {
    type: Array,
    default: [Date]
  },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;