const axios = require("axios");
const Monitor = require("../model/monitor");

exports.addMonitor = async (req, res) => {
  const web_name = req.body.web_name;
  const url = req.body.url;
  const interval = req.body.interval;
  const retries = req.body.retries;
  const email_alert = req.body.email_alert;
  const monitor = new Monitor({
    web_name,
    url,
    interval,
    retries,
    email_alert,
  });
  //
  try {
    // ...

    // Schedule tasks to be run on the server.

    const response = await axios.get(url);

    if (response.status === 200) {
      res.status(200).send("system is up.");
    } else if (response.status === 404) {
      res.status(404).send("system is down.");
    } else {
      res.status(response.status).send("Unexpected status code.");
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).send("URL not found.");
    } else {
      res.status(500).send("An error occurred while checking the URL.");
    }
  }

  monitor.save();
};
