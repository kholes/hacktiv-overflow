const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')
router.get('/', controller.get_all)
router.get('/:id', controller.get_by_id)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)
module.exports = router
