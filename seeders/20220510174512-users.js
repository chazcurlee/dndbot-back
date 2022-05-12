'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: "John",
          lastName: 'Doe',
          userName: 'Doe-J A Cat',
          password: '!123pass321!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Billy",
          lastName: 'Kidd',
          userName: 'Billy Willy',
          password: 'Mypasswordworks!',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
