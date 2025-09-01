// src/routes/categorySheets.js
const express = require("express");
const router = express.Router();
const { CategorySheet } = require("../db/db");

// Get all CategorySheets
router.get("/", async (req, res) => {
  try {
    const categorySheets = await CategorySheet.findAll();
    res.json(categorySheets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get CategorySheet by ID
router.get("/:id", async (req, res) => {
  try {
    const categorySheet = await CategorySheet.findByPk(req.params.id);
    if (!categorySheet) return res.status(404).json({ error: "CategorySheet not found" });
    res.json(categorySheet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new CategorySheet
router.post("/", async (req, res) => {
  try {
    const { Category, SheetName } = req.body;
    const newCategorySheet = await CategorySheet.create({ Category, SheetName });
    res.status(201).json(newCategorySheet);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Category already exists" });
    }
    res.status(500).json({ error: err.message });
  }
});

// Update a CategorySheet
router.put("/:id", async (req, res) => {
  try {
    const { Category, SheetName } = req.body;
    const categorySheet = await CategorySheet.findByPk(req.params.id);
    if (!categorySheet) return res.status(404).json({ error: "CategorySheet not found" });

    await categorySheet.update({ Category, SheetName });
    res.json(categorySheet);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Category already exists" });
    }
    res.status(500).json({ error: err.message });
  }
});

// Delete a CategorySheet
router.delete("/:id", async (req, res) => {
  try {
    const categorySheet = await CategorySheet.findByPk(req.params.id);
    if (!categorySheet) return res.status(404).json({ error: "CategorySheet not found" });

    await categorySheet.destroy();
    res.json({ message: "CategorySheet deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;