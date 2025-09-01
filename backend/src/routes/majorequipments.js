const express = require("express");
const router = express.Router();
const { MajorEquipment } = require("../db/db");

// ✅ Create new equipment
router.post("/", async (req, res) => {
  try {
    const equipment = await MajorEquipment.create(req.body);
    res.status(201).json(equipment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all equipments
router.get("/", async (req, res) => {
  try {
    const equipments = await MajorEquipment.findAll();
    res.json(equipments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get equipment by ID
router.get("/:id", async (req, res) => {
  try {
    const equipment = await MajorEquipment.findByPk(req.params.id);
    if (!equipment) return res.status(404).json({ error: "Equipment not found" });
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update equipment
router.put("/:id", async (req, res) => {
  try {
    const equipment = await MajorEquipment.findByPk(req.params.id);
    if (!equipment) return res.status(404).json({ error: "Equipment not found" });

    await equipment.update(req.body);
    res.json({ message: "Equipment updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Delete equipment
router.delete("/:id", async (req, res) => {
  try {
    const equipment = await MajorEquipment.findByPk(req.params.id);
    if (!equipment) return res.status(404).json({ error: "Equipment not found" });

    await equipment.destroy();
    res.json({ message: "Equipment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;