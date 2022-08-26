const express = require("express");
const helmet = require("helmet");
const meetingRouter = require("./meeting/meeting.routes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use("/v1/api/", meetingRouter);


app.get("*", (req, res, next) => {
  next(new Error("You've reached a path outside the map 😭"))
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    status: 500,
    message: "Interval Server Error"
  });
});

module.exports = app;
