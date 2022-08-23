const express = require("express");
const helmet = require("helmet");
const meetingRouter = require("./meeting/meeting.routes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use("/v1/api/", meetingRouter);


app.get("*", (req, res, next) => {
  next(new Error(""))
})

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(200).json({
    status: 200,
    message: "Interval Server Error"
  });
});

module.exports = app;
