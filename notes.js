const express = require("express");
const router = express.Router();

const notesCont = require("../controllers/notes");

const auth = require("../middleware/authm");

router.post("/createNotes", auth, notesCont.postNotes);
router.get("/viewNotes", auth, notesCont.getAllNotes);
router.get("/viewNotes/:id", auth, notesCont.getNotesId);
router.put("/updateNotes/:id", auth, notesCont.updateNotes); //or /:user_id & :notes_id
router.delete("/deleteNotes/:id", auth, notesCont.deleteNotes);
router.get("/viewNotess/:id", auth, notesCont.getNotesTId);
router.get("/viewNote/:id", auth, notesCont.getNotesCId);

module.exports = router;
