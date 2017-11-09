const express = require('express')
const router = express.Router()
const controller = require('../controllers/questions')
router.get('/', controller.get_all)
router.get('/:id', controller.get_by_id)
router.post('/', controller.create)
router.delete('/:id', controller.delete)
module.exports = router
