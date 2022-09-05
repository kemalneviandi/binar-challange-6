'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserBiodata.belongsTo(models.UserGame)
    }
  }
  UserBiodata.init({
    UserGameId: DataTypes.INTEGER,
    dob: DataTypes.DATEONLY,
    pob: DataTypes.STRING,
    city: DataTypes.STRING,
    gender: DataTypes.ENUM('male','female')
  }, {
    sequelize,
    modelName: 'UserBiodata',
  });
  return UserBiodata;
};