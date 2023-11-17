const Monitor = require("../model/monitor");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
const axios = require("axios");
const { performance } = require("perf_hooks");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

cron.schedule("* * * * *", async () => {
  try {
    const monitors = await Monitor.find();

    for (const monitor of monitors) {
      const currentTime = new Date();
      const timeSinceLastCheck = currentTime - (monitor.lastChecked || 0);
      const intervalInSeconds = monitor.interval * 60 * 1000;

      if (timeSinceLastCheck >= intervalInSeconds) {
        const startTime = performance.now();

        try {
          const response = await axios.get(monitor.url);

          if (response.status === 200) {
            monitor.status = "up";
          } else {
            monitor.status = "down";
            sendNotificationEmail(monitor);
          }

          const endTime = performance.now();
          monitor.responseTime = endTime - startTime;
        } catch (error) {
          monitor.status = "down";
          monitor.responseTime = 0;
          sendNotificationEmail(monitor);
        }

        monitor.lastChecked = new Date();
        monitor.uptime = monitor.status === "up" ? 100 : 0;

        await monitor.save();
      }
    }
  } catch (error) {
    console.error("Error updating monitor status:", error);
  }
});

function sendNotificationEmail(monitor) {
  const mailOptions = {
    from: "website@levenola.com",
    to: monitor.email_alert,
    subject: `Monitor Alert: ${monitor.web_name} is Down`,
    text: `The monitor for ${monitor.web_name} (${monitor.url}) is currently down. Please take action.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

const getMonitors = async (req, res) => {
  try {
    const monitors = await Monitor.find();
    res.json({ monitors });
  } catch (error) {
    console.error("Error fetching monitors:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateMonitors = async (req, res) => {
  const { id } = req.params;
  const { web_name, url, interval, retries, email_alert } = req.body;

  try {
    const monitor = await Monitor.findByIdAndUpdate(
      id,
      {
        web_name,
        url,
        interval,
        retries,
        email_alert,
      },
      { new: true }
    );

    if (!monitor) {
      return res.status(404).json({ error: "Monitor not found" });
    }

    res.json(monitor);
  } catch (error) {
    console.error("Error updating monitor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteMonitor = async (req, res) => {
  const { id } = req.params;

  try {
    const monitor = await Monitor.findByIdAndDelete(id);

    if (!monitor) {
      return res.status(404).json({ error: "Monitor not found" });
    }

    res.json({ message: "Monitor deleted successfully" });
  } catch (error) {
    console.error("Error deleting monitor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getMonitors, updateMonitors, deleteMonitor };
