const router = require('express').Router()
const controller = require('../controllers/GradeController')

router.put('/:class_id', controller.EnrollStudent)

module.exports = router
