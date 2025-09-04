const { DataTypes } = require("sequelize");
const { equipmentDB } = require("../config");

const LightingEquipment = equipmentDB.define("LightingEquipment", {
  Categoryname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EquipmentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Capacity: {
    type: DataTypes.STRING,
  },
  Make: {
    type: DataTypes.STRING,
  },
  Model: {
    type: DataTypes.STRING,
  },
  PowerPerUnit: {
    type: DataTypes.FLOAT,
  },
  ConnectedLoad: {
    type: DataTypes.FLOAT,
  },
  UtilityFactor: {
    type: DataTypes.FLOAT,
  },
});

module.exports = LightingEquipment;
