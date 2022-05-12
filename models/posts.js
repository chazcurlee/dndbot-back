'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    
    static associate(models) {
      
      Posts.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),

      Posts.hasMany(models.Comments, {
        foreignKey: 'post_id',
        as: 'post',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Posts.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Posts',
    tableName: 'posts'
  });
  return Posts;
};