const router = require('express').Router()
const controller = require('../controllers/ClassController')

router.get('/all', controller.GetAllClasses)
router.get('/:class_id', controller.GetOneClass)
// router.post('/', controller.CreateClass)
// router.put('/:class_id', controller.UpdateClass)
// router.delete('/:class_id', controller.DeleteClass)

module.exports = router
