const { Student, Class, Grade } = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const GetOneStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.student_id, {
      include: { model: Class, through: Grade, as: 'classes' }
    })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const CreateStudent = async (req, res) => {
  try {
    const newStudent = await Student.create({ ...req.body })
    res.send(newStudent)
  } catch (error) {
    throw error
  }
}

const UpdateStudent = async (req, res) => {
  try {
    const updateStudent = await Student.update(
      { ...req.body },
      { where: { id: req.params.student_id }, returning: true }
    )
    res.send(updateStudent)
  } catch (error) {
    throw error
  }
}

const DeleteStudent = async (req, res) => {
  try {
    await Student.destroy({ where: { id: req.params.student_id } })
    res.send({
      msg: 'Student Deleted',
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudents,
  GetOneStudent,
  CreateStudent,
  UpdateStudent,
  DeleteStudent
}
