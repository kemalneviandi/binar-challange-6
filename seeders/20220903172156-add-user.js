'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserGames', [{
      username: 'kemal',
      password: 'aniesbaswedannomor1', 
      createdAt: new Date(),
      updatedAt: new Date(),
       }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserGames', null, {});
  }
};
