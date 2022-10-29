const jwt = require("jsonwebtoken");
const User = require("../models/users");

const auth = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[1]
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decode = await jwt.verify(token, "secretmsge");
      const user = await User.findOne({ _id: decode._id }); //eza st3mlt user honk: decode.user._id
      if (!user) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  }
};

module.exports = auth;
