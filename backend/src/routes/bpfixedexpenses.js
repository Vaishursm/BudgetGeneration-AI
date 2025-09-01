// src/routes/bpFixedExpenses.js
const express = require("express");
const router = express.Router();
const { BPFixedExpense } = require("../db/db");

// Get all BPFixedExpenses
router.get("/", async (req, res) => {
  try {
    const expenses = await BPFixedExpense.findAll();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get BPFixedExpense by ID
router.get("/:id", async (req, res) => {
  try {
    const expense = await BPFixedExpense.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: "BPFixedExpense not found" });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new BPFixedExpense
router.post("/", async (req, res) => {
  try {
    const { Category, Cost, remarks } = req.body;
    const newExpense = await BPFixedExpense.create({ Category, Cost, remarks });
    res.status(201).json(newExpense);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Category already exists" });
    }
    res.status(500).json({ error: err.message });
  }
});

// Update a BPFixedExpense
router.put("/:id", async (req, res) => {
  try {
    const { Category, Cost, remarks } = req.body;
    const expense = await BPFixedExpense.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: "BPFixedExpense not found" });

    await expense.update({ Category, Cost, remarks });
    res.json(expense);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Category already exists" });
    }
    res.status(500).json({ error: err.message });
  }
});

// Delete a BPFixedExpense
router.delete("/:id", async (req, res) => {
  try {
    const expense = await BPFixedExpense.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: "BPFixedExpense not found" });

    await expense.destroy();
    res.json({ message: "BPFixedExpense deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;