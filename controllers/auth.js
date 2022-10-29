const User = require("../models/users");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

exports.postSignup = async (req, res, next) => {
  const hashpass = await bcrypt.hash(req.body.password, saltRounds);
  const data = { email: req.body.email, password: hashpass };
  const user = await User.create(data);
  res.json(user);
};

exports.postLogin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).json({ error: "no user found" });
    return;
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    res.status(404).json({ error: "password do not match" });
    return;
  }
  const token = await jwt.sign({ _id: user._id.toString() }, "secretmsge"); //aw .sign({user},"secretmsge")
  res.json({ user, access_token: token });
};

/*exports.postLogin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).json({ error: "no user found" });
    return;
  }
  if (req.body.password !== user.password) {
    res.status(404).json({ error: "password do not match" });
    return;
  }
  const token = await jwt.sign({ user }, "secretmsge");
  res.json({ user, access_token: token });
};*/
