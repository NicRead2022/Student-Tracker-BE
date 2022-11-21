'use strict'
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let students = [...Array(50)].map((_) => ({
      name: falso.randFullName(),
      email: falso.randEmail(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('students', students)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('students')
  }
}
