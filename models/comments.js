'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    
    static associate(models) {
      Comments.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

      Comments.belongsTo(models.Posts, {
        foreignKey: 'post_id',
        as: 'post',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }

  Comments.init({
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'post_id',
      onDelete: 'CASCADE',
      references: {
        model: 'posts',
        key: 'id'
      }
    },
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comments',
    tableName: 'comments'
  });
  return Comments;
};