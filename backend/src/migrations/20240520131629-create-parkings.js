import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('parkings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING
      },
      area: {
        allowNull: false,
        type: DataTypes.STRING
      },
      startTime: {
        allowNull: false,
        type: DataTypes.DATE
      },
      endTime: {
        type: DataTypes.DATE
      },
      price: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('parkings');
  }
};
