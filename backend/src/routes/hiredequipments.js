// src/routes/hiredequipments.js
const express = require("express");
const router = express.Router();
const { HiredEquipment } = require("../db/db");

// ✅ Create a new hired equipment
router.post("/", async (req, res) => {
  try {
    const hiredEquipment = await HiredEquipment.create(req.body);
    res.status(201).json(hiredEquipment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all hired equipments
router.get("/", async (req, res) => {
  try {
    const hiredEquipments = await HiredEquipment.findAll();
    res.json(hiredEquipments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get hired equipment by ID
router.get("/:id", async (req, res) => {
  try {
    const hiredEquipment = await HiredEquipment.findByPk(req.params.id);
    if (!hiredEquipment) return res.status(404).json({ error: "Hired equipment not found" });
    res.json(hiredEquipment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update hired equipment by ID
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await HiredEquipment.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedEquipment = await HiredEquipment.findByPk(req.params.id);
      res.json(updatedEquipment);
    } else {
      res.status(404).json({ error: "Hired equipment not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Delete hired equipment by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await HiredEquipment.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ error: "Hired equipment not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;