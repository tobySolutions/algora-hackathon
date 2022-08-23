const {Schema, model} = require('mongoose');


const meetingSchema = new Schema({
  id: {
    type: "string",
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: "string",
    required: true
  },
  agenda: {
    type: ["string"],
    required: true
  }
});


module.exports = model('Meeting', meetingSchema);
