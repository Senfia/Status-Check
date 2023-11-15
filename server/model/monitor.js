const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MonitorSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
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
  lastChecked: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["up", "down"],
    default: "up",
  },
  uptime: {
    type: Number,
    default: 100, // Initially assume 100% uptime
  },
  lastChecked: {
    type: Date,
  },
  responseTime: {
    type: Number,
    default: 0,
  },
});

const Monitor = mongoose.model("Monitor", MonitorSchema);

module.exports = Monitor;
