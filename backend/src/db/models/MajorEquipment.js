const { DataTypes } = require("sequelize");
const { equipmentDB } = require("../config");

const MajorEquipment = equipmentDB.define("MajorEquipment", {
  Categoryname: { type: DataTypes.STRING, allowNull: false },
  EquipmentName: { type: DataTypes.STRING, allowNull: false },
  Make: { type: DataTypes.STRING },
  Model: { type: DataTypes.STRING },
  Capacity: { type: DataTypes.STRING },
  Drive: { type: DataTypes.STRING },
  RepValue: { type: DataTypes.FLOAT },
  DepreciationPercentage: { type: DataTypes.FLOAT },
  Depreciation_Fixed: { type: DataTypes.FLOAT },
  Hrs_PerMonth: { type: DataTypes.INTEGER },
  Fuel_PerHour: { type: DataTypes.FLOAT },
  Power_PerHour: { type: DataTypes.FLOAT },
  OperatorCost_PerMonth: { type: DataTypes.FLOAT },
  RAndMPer_275: { type: DataTypes.FLOAT },
  RAndMPer_125: { type: DataTypes.FLOAT },
  RAndMPerc_050: { type: DataTypes.FLOAT },
  MaintCost_PerMonth: { type: DataTypes.FLOAT },
  PowerPerUnit_x0028_HP_x0029_: { type: DataTypes.FLOAT },
  UtilityFactor: { type: DataTypes.FLOAT },
});

module.exports = MajorEquipment;
