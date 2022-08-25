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

meetingRouter.post('/meetings', validation(meetingSchema), meetingController.createMeeting);
meetingRouter.post("/meetings/tokens",nocache, meetingController.generateToken);

module.exports = meetingRouter;