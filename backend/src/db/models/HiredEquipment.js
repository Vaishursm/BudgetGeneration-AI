const { DataTypes } = require("sequelize");
const { equipmentDB } = require("../config");

const HiredEquipment = equipmentDB.define("HiredEquipment", {
  Categoryname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EquipmentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Make: {
    type: DataTypes.STRING,
  },
  Model: {
    type: DataTypes.STRING,
  },
  Capacity: {
    type: DataTypes.STRING,
  },
  HireCharges: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  RAndMPercentage: {
    type: DataTypes.FLOAT,
  },
  Hrs_PerMonth: {
    type: DataTypes.INTEGER,
  },
  Fuel_PerHour: {
    type: DataTypes.FLOAT,
  },
  Power_PerHour: {
    type: DataTypes.FLOAT,
  },
  OperatorCost_PerMonth: {
    type: DataTypes.FLOAT,
  },
});

module.exports = HiredEquipment;
