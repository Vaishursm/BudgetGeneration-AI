const { DataTypes } = require("sequelize");
const { equipmentDB } = require("../config");

const CategorySheets = equipmentDB.define("CategorySheet", {
  Category: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  SheetName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = CategorySheets;
