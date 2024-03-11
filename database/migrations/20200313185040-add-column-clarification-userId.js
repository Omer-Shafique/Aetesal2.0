'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('applicationExecutionWorkflow', 'clarificationUserId', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
          model: 'user',
          key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('applicationExecutionWorkflow', 'clarificationUserId');
  }
};
