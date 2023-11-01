const express = require("express");
const { signup, signin } = require("../authentication/auth");

const router = express.Router();

router.post("/register", signup);
router.post("/login", signin);

module.exports = router;
