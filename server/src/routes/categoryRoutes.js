const express = require("express");
const router = express.Router();
const { addCategory, getCategories } = require("../controllers/categoryController");

// POST - Add Category
router.post("/", addCategory);

// GET - Get all categories
router.get("/", getCategories);

module.exports = router;
