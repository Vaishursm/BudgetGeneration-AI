// src/routes/lightingequipments.js
const express = require("express");
const router = express.Router();
const { LightingEquipment } = require("../db/db");

// ✅ Create a new lighting equipment
router.post("/", async (req, res) => {
  try {
    const lightingEquipment = await LightingEquipment.create(req.body);
    res.status(201).json(lightingEquipment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all lighting equipments
router.get("/", async (req, res) => {
  try {
    const lightingEquipments = await LightingEquipment.findAll();
    res.json(lightingEquipments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get lighting equipment by ID
router.get("/:id", async (req, res) => {
  try {
    const lightingEquipment = await LightingEquipment.findByPk(req.params.id);
    if (!lightingEquipment) return res.status(404).json({ error: "Lighting equipment not found" });
    res.json(lightingEquipment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update lighting equipment by ID
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await LightingEquipment.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedEquipment = await LightingEquipment.findByPk(req.params.id);
      res.json(updatedEquipment);
    } else {
      res.status(404).json({ error: "Lighting equipment not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const expense = await LightingEquipment.findByPk(req.params.id);
    if (!expense) return res.status(404).json({ error: "Lighting equipment not found" });

    await expense.destroy();
    res.json({ message: "Lighting equipment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;