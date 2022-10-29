const Categ = require("../models/categs");

exports.postCateg = async (req, res, next) => {
  try {
    await Categ.create(req.body);
    res.status(201).json({ data: "Categorie is created and stored" });
  } catch (err) {
    res.status(401).json(err);
  }
};

/*exports.postCateg = async (req, res) => {
  const descr = req.body.descr;
  try {
    const categ = new Categ({
      descr: descr,
    });
    await categ.save();
    res.status(201).json(" categ created ");
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};*/

exports.getCateg = async (req, res) => {
  const categ = await Categ.find();
  res.status(200).json(categ);
};

exports.getCategId = async (req, res) => {
  const id = req.params.id;
  const categ = await Categ.findById(id);
  res.status(200).json(categ);
};

/*exports.updateCateg = async (req, res) => {
  const id = req.params.id;
  try {
    await Categ.updateOne({ id }, { $set: req.body });
    res.status(200).json({ data: "Category updated" });
  } catch (err) {
    res.status(400).json(err);
  }
};*/

exports.updateCateg = async (req, res) => {
  const id = req.params.id;
  const descr = req.body.descr;
  let categ = await Categ.findById(id);
  const result = await categ.updateOne({
    descr: descr,
  });
  res.status(200).json(result);
};

exports.deleteCateg = async (req, res) => {
  const id = req.params.id;
  await Categ.findByIdAndDelete(id);
  res.status(200).json({ data: "categ deleted" });
};
