const { DataTypes } = require("sequelize");
const { expenseDB } = require("../config");

const FixedExpense = expenseDB.define("FixedExpense", {
  Category: { type: DataTypes.STRING, allowNull: false, unique: true },
  Cost: { type: DataTypes.FLOAT, allowNull: false },
  remarks: { type: DataTypes.STRING },
});

module.exports = FixedExpense;
