const { DataTypes } = require("sequelize");
const { equipmentDB } = require("../config");

const MinorEquipment = equipmentDB.define("MinorEquipment", {
  Categoryname: { type: DataTypes.STRING, allowNull: false },
  EquipmentName: { type: DataTypes.STRING, allowNull: false },
  Make: { type: DataTypes.STRING },
  Model: { type: DataTypes.STRING },
  Capacity: { type: DataTypes.STRING },
  Drive: { type: DataTypes.STRING },
  CostOfNewEquipment: { type: DataTypes.FLOAT },
  RAndMPercentage: { type: DataTypes.FLOAT },
  Fuel_PerHour: { type: DataTypes.FLOAT },
  Power_PerHour: { type: DataTypes.FLOAT },
  DepreciationPercentage: { type: DataTypes.FLOAT },
  Hrs_PerMonth: { type: DataTypes.INTEGER },
  OperatorCost_PerMonth: { type: DataTypes.FLOAT },
  PowerPerUnit_x0028_HP_x0029_: { type: DataTypes.FLOAT },
  ConnectedLoadPerMC: { type: DataTypes.FLOAT },
  UtilityFactor: { type: DataTypes.FLOAT },
});

module.exports = MinorEquipment;
