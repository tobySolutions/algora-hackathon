const Joi = require('joi');

const meetingDetailsSchema = Joi.object({
  date: Joi.date().required(),
  duration: Joi.number().min(1).required(), //TODO ask tobi
  agenda: Joi.array().required(),
  saveForLater: Joi.bool().required()
});

module.exports = meetingDetailsSchema;