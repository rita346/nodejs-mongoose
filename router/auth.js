const express = require("express");
const router = express.Router();

const authCont = require("../controllers/auth");

const emailVals = require("email-validator");

router.post(
  "/signup",
  function (req, res, next) {
    const email = req.body.email;
    if (!emailVals.validate(email)) {
      res.status(404).json({ error: "email is not valid" });
      return;
    }
    next();
  },
  authCont.postSignup
);

router.post(
  "/login",
  function (req, res, next) {
    const email = req.body.email;
    if (!emailVals.validate(email)) {
      res.status(404).json({ error: "email is not valid" });
      return;
    }
    next();
  },
  authCont.postLogin
);

module.exports = router;
