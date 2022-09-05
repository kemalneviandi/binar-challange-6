'use strict';

const { ENUM } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('UserHistories', [{
        UserGameId: 1,
        time: new Date(),
        score: 'lose',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        UserGameId: 1,
        time: new Date(),
        score: 'lose',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        UserGameId: 1,
        time: new Date(),
        score: 'win',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        UserGameId: 2,
        time: new Date(),
        score: 'lose',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        UserGameId: 2,
        time: new Date(),
        score: 'win',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        UserGameId: 2,
        time: new Date(),
        score: 'draw',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('UserHistories', null, {});   
  }
};
