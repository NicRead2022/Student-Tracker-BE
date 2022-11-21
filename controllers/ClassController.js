const { Class } = require('../models')

const GetAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll()
    res.send(classes)
  } catch (error) {
    throw error
  }
}

const GetOneClass = async (req, res) => {
  try {
    const aClass = await Class.findByPk(req.params.class_id)
    res.send(aClass)
  } catch (error) {
    throw error
  }
}

const CreateClass = async (req, res) => {
  try {
    const newClass = await Class.create({ ...req.body })
    res.send(newClass)
  } catch (error) {
    throw error
  }
}

const UpdateClass = async (req, res) => {
  try {
    const updateClass = await Class.update(
      { ...req.body },
      { where: { id: req.params.class_id }, returning: true }
    )
    res.send(updateClass)
  } catch (error) {
    throw error
  }
}

const DeleteClass = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllClasses,
  GetOneClass,
  CreateClass,
  UpdateClass
  // DeleteClass
}
