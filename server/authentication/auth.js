const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/userModel");

exports.signup = async (req, res) => {
  const newUser = User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  const token = jwt.sign({ id: newUser._id }, process.env.API_SECRET, {
    expiresIn: "2d",
  });
  res.status(201).json({
    status: "success",
    token,
    message: "user created successfully",
  });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).send("incorrect email or passowrd");
    }
    const token = jwt.sign({ id: user._id }, process.env.API_SECRET, {
      expiresIn: "2d",
    });
    res.status(200).json({
      status: "success",
      token,
    });
  } catch (e) {
    console.log(e);
  }
};
