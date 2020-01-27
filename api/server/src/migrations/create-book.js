'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING
      },
      buyValue: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      sellValue: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Authors', key:'id'}
      },
      publisherId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Publishers', key:'id'}
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};
