const router = require('express').Router()
const controller = require('../controllers/StudentController')

router.get('/all', controller.GetAllStudents)
router.get('/:student_id', controller.GetOneStudent)
router.post('/', controller.CreateStudent)
router.put('/:student_id', controller.UpdateStudent)
router.delete('/:student_id', controller.DeleteStudent)

module.exports = router
