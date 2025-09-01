// src/routes/fixedExpenses.js
const express = require("express");
const router = express.Router();
const { FixedExpense } = require("../db/db");

// Get all FixedExpenses
router.get("/", async (req, res) => {
  try {
    const fixedExpenses = await FixedExpense.findAll();
    res.json(fixedExpenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get FixedExpense by ID
router.get("/:id", async (req, res) => {
  try {
    const fixedExpense = await FixedExpense.findByPk(req.params.id);
    if (!fixedExpense) return res.status(404).json({ error: "FixedExpense not found" });
    res.json(fixedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new FixedExpense
router.post("/", async (req, res) => {
  try {
    const { Category, Cost } = req.body;
    const newFixedExpense = await FixedExpense.create({ Category, Cost });
    res.status(201).json(newFixedExpense);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Category already exists" });
    }
    res.status(500).json({ error: err.message });
  }
});

// Update a FixedExpense
router.put("/:id", async (req, res) => {
  try {
    const { Category, Cost } = req.body;
    const fixedExpense = await FixedExpense.findByPk(req.params.id);
    if (!fixedExpense) return res.status(404).json({ error: "FixedExpense not found" });

    await fixedExpense.update({ Category, Cost });
    res.json(fixedExpense);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Category already exists" });
    }
    res.status(500).json({ error: err.message });
  }
});

// Delete a FixedExpense
router.delete("/:id", async (req, res) => {
  try {
    const fixedExpense = await FixedExpense.findByPk(req.params.id);
    if (!fixedExpense) return res.status(404).json({ error: "FixedExpense not found" });

    await fixedExpense.destroy();
    res.json({ message: "FixedExpense deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;