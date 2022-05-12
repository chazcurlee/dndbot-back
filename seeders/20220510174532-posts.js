'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          user_id: 8,
          title: 'Test Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius duis at consectetur lorem donec massa sapien. Eu turpis egestas pretium aenean. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Dictum non consectetur a erat. Sociis natoque penatibus et magnis dis parturient montes. Proin fermentum leo vel orci porta non pulvinar. Posuere morbi leo urna molestie at. Proin sed libero enim sed faucibus turpis. Ultrices gravida dictum fusce ut placerat orci nulla. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Eget mauris pharetra et ultrices neque. Nisl suscipit adipiscing bibendum est ultricies integer quis. Tincidunt vitae semper quis lectus nulla. Sed risus pretium quam vulputate dignissim suspendisse. Feugiat in ante metus dictum at tempor.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 9,
          title: 'Another Test Title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius duis at consectetur lorem donec massa sapien. Eu turpis egestas pretium aenean. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Dictum non consectetur a erat. Sociis natoque penatibus et magnis dis parturient montes. Proin fermentum leo vel orci porta non pulvinar. Posuere morbi leo urna molestie at. Proin sed libero enim sed faucibus turpis. Ultrices gravida dictum fusce ut placerat orci nulla. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Eget mauris pharetra et ultrices neque. Nisl suscipit adipiscing bibendum est ultricies integer quis. Tincidunt vitae semper quis lectus nulla. Sed risus pretium quam vulputate dignissim suspendisse. Feugiat in ante metus dictum at tempor.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('posts', null, {})
  }
};
