const Notes = require("../models/notes");
const mongoose = require("mongoose");
const User = require("../models/users");
const Categ = require("../models/categs");
const Tag = require("../models/tags");

//create notes
exports.postNotes = async (req, res) => {
  const notes = await Notes.create(req.body);
  res.status(201).json(notes);
};

//view all notes
exports.getAllNotes = async (req, res) => {
  const notes = await Notes.find();
  res.status(200).json(notes);
};

//get note by note id
/*exports.getNotesId = async (req, res) => {
  const notes = await Notes.findById(req.params.id);
  res.status(200).json(notes);
};*/

//get note by user id
exports.getNotesId = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);

  const user = await User.findById(id);
  const notes = await Notes.find({ user: id });
  res.status(200).json({ notes: notes, user: user });
};

//update by notes id
/*exports.updateNotes = async (req, res) => {
  const id = req.params.id;
  await Notes.updateOne(({ id }, { $set: req.body }));
  res.status(200).json("Notes updated");
};*/

//update by user id
exports.updateNotes = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const user = await User.findById(id);
  const notes = await Notes.findOneAndUpdate({ user: id }, { $set: req.body });
  res.status(200).json("updated notes");
};

//delete by notes id
/*exports.deleteNotes = async (req, res) => {
  await Notes.findOneAndDelete(req.params.id);
  res.status(200).json({ data: "notes deleted" });
};*/

//delete by user id
/*exports.deleteNotes = async (req, res) => {
  const id = req.query;
  const user = await User.findById(id);
  const notes = await Notes.findOneAndDelete({ user_id: id });
  res.status(200).json("deleted notes");
};*/
exports.deleteNotes = async (req, res) => {
  await Notes.findOneAndDelete(req.query);
  res.status(200).json({ data: "notes deleted" });
};

//get notes by tag id
exports.getNotesTId = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);

  const tag = await Tag.findById(id);
  const notes = await Notes.find({ tag: id });
  res.status(200).json({ notes: notes, tag: tag });
};

//get notes by category id
exports.getNotesCId = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);

  const categ = await Categ.findById(id);
  const notes = await Notes.find({ categ: id });
  res.status(200).json({ notes: notes, categ: categ });
};
