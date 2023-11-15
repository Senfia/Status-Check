const Monitor = require("../model/monitor");
const cron = require("node-cron");
const nodemailer = require("nodemailer");

require("dotenv").config(); // Load environment variables from .env file

// Configure nodemailer with environment variables
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  port: 465, // Use the appropriate port for SMTPS
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Schedule the monitor status check every minute
cron.schedule("* * * * *", async () => {
  try {
    // Fetch all monitors
    const monitors = await Monitor.find();

    // Check the status for each monitor
    for (const monitor of monitors) {
      const currentTime = new Date();

      // Check if the interval has passed since the last check
      const timeSinceLastCheck = currentTime - (monitor.lastChecked || 0);
      const intervalInSeconds = monitor.interval * 60 * 1000; // Convert minutes to milliseconds

      if (timeSinceLastCheck >= intervalInSeconds) {
        const startTime = new Date();

        // Perform a sample request to the monitor's URL
        try {
          const response = await axios.get(monitor.url);

          // Check if the response status code is 200
          if (response.status === 200) {
            monitor.status = "up";
          } else {
            monitor.status = "down";

            // Send email notification for monitor downtime
            sendNotificationEmail(monitor);
          }

          // Record the response time
          monitor.responseTime = new Date() - startTime;
        } catch (error) {
          // If an error occurs during the request, mark as down
          monitor.status = "down";
          monitor.responseTime = 0; // Set response time to 0 in case of an error

          // Send email notification for monitor downtime
          sendNotificationEmail(monitor);
        }

        // Update the monitor data
        monitor.lastChecked = new Date();
        monitor.uptime = monitor.status === "up" ? 100 : 0;

        await monitor.save();
      }
    }
  } catch (error) {
    console.error("Error updating monitor status:", error);
  }
});

// Function to send email notification
function sendNotificationEmail(monitor) {
  const mailOptions = {
    from: "status-check@cubemite.com",
    to: monitor.email_alert, // Use the email specified in the form
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
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
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

// const getMonitors = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const monitors = await Monitor.findById(id).populate("user");
//     console.log(monitors);
//     res.json({ monitor: monitors });
//   } catch (err) {
//     console.log(err);
//   }
// };

// Update monitor by ID
const updateMonitors = async (req, res) => {
  const { id } = req.params;
  const {
    web_name,
    url,
    interval,
    retries,
    email_alert,
    // Add other fields you want to update
  } = req.body;

  try {
    const monitor = await Monitor.findByIdAndUpdate(
      id,
      {
        web_name,
        url,
        interval,
        retries,
        email_alert,
        // Add other fields you want to update
      },
      { new: true } // Return the modified document
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

// Delete monitor by ID
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
