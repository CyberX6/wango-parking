import { QueryInterface } from 'sequelize';
import PricingRule from '../models/PricingRule';

export default {
  up: async (queryInterface: QueryInterface) => {
    await PricingRule.bulkCreate([
      {
        city: 'New York City',
        startHour: 0,
        endHour: 24,
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Washington',
        startHour: 8,
        endHour: 20,
        price: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Washington',
        startHour: 20,
        endHour: 8,
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('pricing_rules', {});
  }
};
