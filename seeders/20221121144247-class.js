'use strict'
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let classes = [...Array(5)].map((_) => ({
      name: falso.randJobTitle(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('classes', classes)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('classes')
  }
}
