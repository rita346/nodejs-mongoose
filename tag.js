const express = require("express");
const router = express.Router();

const tagContr = require("../controllers/tag");

const auth = require("../middleware/authm");

//router.use(auth).post("/createTag", tagContr.postTag);
router.post("/createTag", auth, tagContr.postTag);
router.get("/viewTag", auth, tagContr.getTag);
router.get("/viewTag/:id", auth, tagContr.getTagId);
router.put("/updateTag/:id", auth, tagContr.updateTag);
router.delete("/deleteTag/:id", auth, tagContr.deleteTag);

module.exports = router;
