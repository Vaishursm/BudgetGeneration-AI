const { Sequelize } = require("sequelize");
const path = require("path");

// Get the backend directory
const backendDir = path.resolve(__dirname, '..', '..');

// One DB connection for each domain
const projectDB = new Sequelize({
  dialect: "sqlite",
  storage: path.join(backendDir, "projects.db"),
  logging: false,
});

const equipmentDB = new Sequelize({
  dialect: "sqlite",
  storage: path.join(backendDir, "equipment.db"),
  logging: false,
});

const expenseDB = new Sequelize({
  dialect: "sqlite",
  storage: path.join(backendDir, "expenses.db"),
  logging: false,
});

module.exports = { projectDB, equipmentDB, expenseDB };