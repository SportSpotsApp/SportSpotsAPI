'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Spot.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  };
  Spot.init({
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    cityName: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    sportId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};