'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    static associate(models) {
      Grade.belongsTo(models.Student, { foreignKey: 'studentId' })
      Grade.belongsTo(models.Class, { foreignKey: 'classId' })
    }
  }
  Grade.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      },
      classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'classes',
          key: 'id'
        }
      },
      score: DataTypes.INTEGER,
      letter: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Grade',
      tableName: 'grades'
    }
  )
  return Grade
}
