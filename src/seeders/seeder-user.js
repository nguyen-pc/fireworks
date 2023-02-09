'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password:'123456',
      firstName: ' Thanh',
      lastName: 'Nguyen',
      address:"Kien Giang",
      phonenumber:"0788812970",
      gender:1,
      roleId:"R1",
      positionId:5,
      image:"https:...",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

