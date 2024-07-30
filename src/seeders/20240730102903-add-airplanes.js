'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
         modelNumber: 'Boing 737',
         capicity: 300,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        modelNumber: 'Airbus A320',
        capicity: 350 ,
         createdAt:new Date(),
         updatedAt:new Date()
     },
     {
      modelNumber: 'Boing 737',
      capicity: 400,
         createdAt:new Date(),
         updatedAt:new Date()
     },
     {
      modelNumber: 'Boing 747',
      capicity: 370,
      createdAt:new Date(),
         updatedAt:new Date()
     },
     {
      modelNumber: 'Airbus A330',
      capicity: 380,
      createdAt:new Date(),
       updatedAt:new Date()
     },

      ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
