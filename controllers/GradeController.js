const { Class, Student, Grade } = require('../models')
const Sequelize = require('sequelize')

const EnrollStudent = async (req, res) => {
  try {
    const aClass = await Class.findByPk(req.params.class_id)
    await aClass.addStudents([req.body.studentId])
    await aClass.save()
    const response = await Class.findByPk(req.params.class_id, {
      include: { model: Student, through: Grade, as: 'students' }
    })
    res.send(response)
  } catch (error) {
    throw error
  }
}

const UpdateStudentGrade = async (req, res) => {
  try {
    const classId = req.params.class_id
    const { studentId, letter } = req.body
    const updatedGrade = await Grade.update(
      { letter: letter },
      {
        where: Sequelize.and({ classId: classId }, { studentId: studentId }),
        returning: true
      }
    )
    res.send(updatedGrade)
  } catch (error) {
    throw error
  }
}

module.exports = {
  EnrollStudent,
  UpdateStudentGrade
}
