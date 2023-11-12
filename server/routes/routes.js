const express = require("express");
const { signup, signin } = require("../authentication/auth");
const { addMonitor } = require("../controller/add_monitor");
const Monitor = require("../model/monitor");

const router = express.Router();

router.post("/register", signup);
router.post("/login", signin);
router.post("/accounts", addMonitor);
router.get("/accounts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const account = await Monitor.findById(id).populate("user");
    console.log(account);
    res.json({ account: account });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
