const express = require("express");
const { signup, signin } = require("../authentication/auth");
const { addMonitor } = require("../controller/add_monitor");

const router = express.Router();

router.post("/register", signup);
router.post("/login", signin);
router.post("/accounts", addMonitor);

module.exports = router;
