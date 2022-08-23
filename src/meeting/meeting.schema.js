const Joi = require('joi');

const meetingDetailsSchema = Joi.object({
  date: Joi.date().required(),
  duration: Joi.string().required(), //TODO ask tobi
  agenda: Joi.array().required(),
});

module.exports = meetingDetailsSchema;