const router = require('express').Router()
const controller = require('../controllers/GradeController')

router.put('/enroll/:class_id', controller.EnrollStudent)
router.put('/:class_id', controller.UpdateStudentGrade)

module.exports = router
