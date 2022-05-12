'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          post_id: 6,
          user_id: 8,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: 5,
          user_id: 9,
          content: 'This is a comment.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments', null, {})
  }
};
