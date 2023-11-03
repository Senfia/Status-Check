const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/userModel");

exports.signup = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  user.save();
  res.status(201).json("user created");
};

exports.signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  try {
    const match = await bcrypt.compare(req.body.password, user.password);
    const accessToken = jwt.sign(JSON.stringify(user), process.env.API_SECRET);
    if (match) {
      res.json({ accessToken: accessToken });
    } else {
      res.json({ message: "Invalid Credentials" });
    }
  } catch (e) {
    console.log(e);
  }
};
