const express = require("express");
const router = express.Router();

const categContr = require("../controllers/categ");

const auth = require("../middleware/authm");

//router.use(auth).post("/createCat", categContr.postCateg);
router.post("/createCat", auth, categContr.postCateg);
router.get("/viewCat", auth, categContr.getCateg);
router.get("/viewCat/:id", auth, categContr.getCategId);
router.put("/updateCat/:id", auth, categContr.updateCateg);
router.delete("/deleteCateg/:id", auth, categContr.deleteCateg);

module.exports = router;
