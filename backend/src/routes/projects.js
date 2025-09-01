const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const ExcelJS = require("exceljs");
const { Project } = require("../db/db");

// ✅ Create new project
router.post("/", async (req, res) => {
  try {
    const { password, projectCode, filePath: _ignoredFilePath, ...rest } = req.body;

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Always generate filePath (ignore incoming)
    const fileName = `${projectCode}.xlsx`;
    const filePath = path.join(__dirname, "../exports", fileName);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // ✅ Save project
    const project = await Project.create({
      projectCode,
      ...rest,
      password: hashedPassword,
      filePath,
    });

    // ✅ Generate Excel dynamically
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Project Details");

    sheet.columns = [
      { header: "Field", key: "field" },
      { header: "Value", key: "value" },
    ];

    Object.entries({ projectCode, ...rest }).forEach(([field, value]) => {
      sheet.addRow({ field, value });
    });

    await workbook.xlsx.writeFile(filePath);

    res.json({
      id: project.id,
      message: "Project created successfully & Excel generated",
      filePath,
    });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Project code already exists" });
    }
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update project (requires password, regenerates filePath)
router.put("/:id", async (req, res) => {
  try {
    const { password, projectCode, filePath: _ignoredFilePath, ...updates } = req.body;
    const project = await Project.findByPk(req.params.id);

    if (!project) return res.status(404).json({ error: "Project not found" });

    const match = await bcrypt.compare(password, project.password);
    if (!match) return res.status(403).json({ error: "Invalid password" });

    // ✅ Recalculate filePath on update
    const fileName = `${projectCode || project.projectCode}.xlsx`;
    const filePath = path.join(__dirname, "../exports", fileName);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    await project.update({
      ...updates,
      filePath,
    });

    res.json({ message: "Project updated successfully", filePath });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Delete project
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    await project.destroy();
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// ✅ Passwords are hashed using bcrypt