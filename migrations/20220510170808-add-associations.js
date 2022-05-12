'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'posts',
      'user_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
        model: 'users',
        key: 'id'
      }
    }
    )
    await queryInterface.changeColumn(
      'comments',
      'user_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
        model: 'users',
        key: 'id'
      }
    }
    )
    await queryInterface.changeColumn(
      'comments',
      'post_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'post_id',
        onDelete: 'CASCADE',
        references: {
        model: 'posts',
        key: 'id'
      }
    }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'posts',
      'user_id',
      {
        type: Sequelize.INTEGER  
      }
    )
    await queryInterface.changeColumn(
      'comments',
      'user_id',
      {
        type: Sequelize.INTEGER
        
      }
    )
    await queryInterface.changeColumn(
      'comments',
      'post_id',
      {
        type: Sequelize.INTEGER,
      }
    )
  }
  
};
