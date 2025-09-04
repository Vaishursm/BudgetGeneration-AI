const { Sequelize } = require("sequelize");

// One DB connection for each domain
const projectDB = new Sequelize({
  dialect: "sqlite",
  storage: "./projects.db",
  logging: false,
});

const equipmentDB = new Sequelize({
  dialect: "sqlite",
  storage: "./equipment.db",
  logging: false,
});

const expenseDB = new Sequelize({
  dialect: "sqlite",
  storage: "./expenses.db",
  logging: false,
});

module.exports = { projectDB, equipmentDB, expenseDB };
