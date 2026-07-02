const Category = require("../models/Category");

// Add a category
exports.addCategory = async (req, res) => {
  try {
    const { category, description } = req.body;
    if (!category) {
      return res.status(400).json({ msg: "Category is required" });
    }

    const newCategory = new Category({ category, description });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};
