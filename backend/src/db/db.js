const { projectDB, equipmentDB, expenseDB } = require("./config"); // Import models
const Project = require("./models/Project");
const FixedExpense = require("./models/FixedExpense");
const BPFixedExpense = require("./models/BPFixedExpense");
const MajorEquipment = require("./models/MajorEquipment");
const MinorEquipment = require("./models/MinorEquipment");
const HiredEquipment = require("./models/HiredEquipment");
const LightingEquipment = require("./models/LightingEquipment");
const CategorySheet = require("./models/CategorySheets");

async function initializeDatabase() {
  try {
    await projectDB.sync();
    await equipmentDB.sync();
    await expenseDB.sync();
    console.log("✅ All databases created successfully!");
  } catch (error) {
    console.error("❌ Error initializing databases:", error);
    throw error;
  }
}
module.exports = {
  initializeDatabase,
  Project,
  FixedExpense,
  BPFixedExpense,
  MajorEquipment,
  MinorEquipment,
  HiredEquipment,
  LightingEquipment,
  CategorySheet,
};
