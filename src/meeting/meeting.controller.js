const config = require('../config')
const {RtcRole, RtcTokenBuilder} = require("agora-access-token");
const Meeting = require('./meeting.model');

const meetingController = {
  createMeeting: async (req, res) => {
    const {date, duration, agenda, saveForLater} = req.body;

    const newMeeting = new Meeting({
      date,
      duration,
      agenda
    });

    try{
      const result = await newMeeting.save()

      if (saveForLater) {
        res.status(200).json({
          status: 200,
          message: "Meeting saved successfully",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Meeting created successfully",
          data: [result]
        });
      }
    }catch (err){
      console.log(err);
      res.status(500).json({
        status: 500,
        message: "An error occurred while creating the meeting"
      });
    }
  },

  generateToken: (req, res) => {
    const APP_ID = config.APP_ID;
    const APP_CERTIFICATE = config.APP_CERTIFICATE;

    res.header('Access-Control-Allow-Origin', "*");

    const channelName = req.query.channelName;
    if (!channelName){
      return res.status(500).json({ error: "channel is required."});
    }

    let uid = req.query.uid;
    if(!uid || uid === ''){
      uid = 0;
    }


    let role = RtcRole.SUBSCRIBER;
    if (req.query.role === 'publisher'){
      role = RtcRole.PUBLISHER;
    }

    let expireTime = req.query.expireTime;
    if (!expireTime || expireTime === ''){
      expireTime = 3600;
    }else{
      expireTime = parseInt(expireTime, 10);
    }

    const currentTime = Math.floor(Date.now() / 1000);
    const privilegeExpireTime = currentTime + expireTime;

    const token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channelName,uid, role, privilegeExpireTime);
    return res.status(200).json({
      status: 200,
      token: token
    });
  }
}

module.exports = meetingController;