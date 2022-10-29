const Tag = require("../models/tags");

exports.postTag = async (req, res, next) => {
  try {
    await Tag.create(req.body);
    res.status(201).json({ data: "Tag is created and stored" });
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.getTag = async (req, res) => {
  const tag = await Tag.find();
  res.status(200).json(tag);
};

exports.getTagId = async (req, res) => {
  const id = req.params.id;
  const tag = await Tag.findById(id);
  res.status(200).json(tag);
};

/*exports.updateTag = async (req, res) => {
    const id = req.params.id;
    try {
      await Tag.updateOne({ id }, { $set: req.body });
      res.status(200).json({ data: "Tag updated" });
    } catch (err) {
      res.status(400).json(err);
    }
  };*/

exports.updateTag = async (req, res) => {
  const id = req.params.id;
  const descr = req.body.descr;
  let tag = await Tag.findById(id);
  const result = await tag.updateOne({
    descr: descr,
  });
  res.status(200).json(result);
};

exports.deleteTag = async (req, res) => {
  const id = req.params.id;
  await Tag.findByIdAndDelete(id);
  res.status(200).json({ data: "categ deleted" });
};
