import { QueryInterface } from 'sequelize';
import User from '../models/User';

export default {
  up: async (queryInterface: QueryInterface) => {
    await User.bulkCreate([
      {
        email: 'john.doe@example.com',
        address: '123 Main St',
        fullName: 'John Doe',
        carPlateNumber: 'ABC123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'jane.doe@example.com',
        address: '456 Oak St',
        fullName: 'Jane Doe',
        carPlateNumber: 'XYZ789',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};
