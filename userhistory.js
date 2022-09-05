'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserHistory.init({
    UserGameId: DataTypes.INTEGER,
    time: DataTypes.DATEONLY,
    score: DataTypes.ENUM('win','lose','draw')
  }, {
    sequelize,
    modelName: 'UserHistory',
  });
  return UserHistory;
};