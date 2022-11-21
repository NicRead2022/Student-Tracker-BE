const { Class, Student, Grades } = require('../models')

const EnrollStudent = async (req, res) => {
  try {
    const aClass = await Class.findByPk(req.params.class_id)
    await aClass.addStudents([req.body.studentId])
    await aClass.save()
    const response = await Class.findByPk(req.params.class_id, {
      include: { model: Student, through: Grades, as: 'students' }
    })
    res.send(response)
  } catch (error) {
    throw error
  }
}

module.exports = {
  EnrollStudent
}
