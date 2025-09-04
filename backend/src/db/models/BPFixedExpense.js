const { DataTypes } = require("sequelize");
const { expenseDB } = require("../config");

const BPFixedExpense = expenseDB.define("BPFixedExpense", {
  Category: { type: DataTypes.STRING, allowNull: false, unique: true },
  Cost: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = BPFixedExpense;
