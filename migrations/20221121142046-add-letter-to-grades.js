'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Grade', 'letter', Sequelize.STRING)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Grade', 'letter')
  }
}
