'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      'users',
      'password',
      'passwordDigest'
    )
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.renameColumn(
      'users',
      'passwordDigest',
      'password'
    )
  }
};
