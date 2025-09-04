const { DataTypes } = require("sequelize");
const { projectDB } = require("../config");

const Project = projectDB.define("Project", {
  projectCode: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  clientName: { type: DataTypes.STRING, allowNull: false },
  projectLocation: { type: DataTypes.STRING, allowNull: false },
  projectValue: { type: DataTypes.FLOAT, allowNull: false },
  startDate: { type: DataTypes.STRING, allowNull: false },
  endDate: { type: DataTypes.STRING, allowNull: false },
  concreteQty: { type: DataTypes.INTEGER, allowNull: false },
  fuelCost: { type: DataTypes.FLOAT, allowNull: false },
  powerCost: { type: DataTypes.FLOAT, allowNull: false },
  filePath: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Project;
