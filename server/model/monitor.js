const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MonitorSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  web_name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  interval: {
    type: Number,
  },
  retries: {
    type: Number,
  },
  email_alert: {
    type: String,
  },
});

const Monitor = mongoose.model("Monitor", MonitorSchema);

module.exports = Monitor;
