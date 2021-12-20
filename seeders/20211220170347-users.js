'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'John',
      email: 'john@doe.com',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'John',
      email: 'john@smith.com',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'John',
      email: 'john@stone.com',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
