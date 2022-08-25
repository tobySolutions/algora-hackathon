const {Schema, model} = require('mongoose');

const meetingSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  agenda: {
    type: [{ title: String, time: Number }],
    required: true
  }
});


module.exports = model('Meeting', meetingSchema);
