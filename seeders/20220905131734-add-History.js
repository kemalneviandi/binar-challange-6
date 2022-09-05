'use strict';

const { ENUM } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('UserHistories', [{
        UserGameId: 1,
        time: new Date(),
        score: 'win'
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('UserHistories', null, {});   
  }
};
