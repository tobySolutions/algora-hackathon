const {Router} = require('express');
const meetingController = require('./meeting.controller');
const validation = require("./meeting.validation");
const meetingSchema = require('./meeting.schema');


const meetingRouter = Router();

const nocache = (req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

meetingRouter.post('/meeting', validation(meetingSchema), meetingController.createMeeting);
meetingRouter.post('/meeting/save', validation(meetingSchema), meetingController.saveMeetingDetails);
meetingRouter.post("/meeting/tokens",nocache, meetingController.generateToken);

module.exports = meetingRouter;