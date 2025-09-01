const express = require("express");
const router = express.Router();
const { MinorEquipment } = require("../db/db");

// ✅ Create new minor equipment
router.post("/", async (req, res) => {
  try {
    const equipment = await MinorEquipment.create(req.body);
    res.status(201).json(equipment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all minor equipments
router.get("/", async (req, res) => {
  try {
    const equipments = await MinorEquipment.findAll();
    res.json(equipments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get minor equipment by ID
router.get("/:id", async (req, res) => {
  try {
    const equipment = await MinorEquipment.findByPk(req.params.id);
    if (!equipment) return res.status(404).json({ error: "Equipment not found" });
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update minor equipment
router.put("/:id", async (req, res) => {
  try {
    const equipment = await MinorEquipment.findByPk(req.params.id);
    if (!equipment) return res.status(404).json({ error: "Equipment not found" });

    await equipment.update(req.body);
    res.json({ message: "Minor equipment updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Delete minor equipment
router.delete("/:id", async (req, res) => {
  try {
    const equipment = await MinorEquipment.findByPk(req.params.id);
    if (!equipment) return res.status(404).json({ error: "Equipment not found" });

    await equipment.destroy();
    res.json({ message: "Minor equipment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;