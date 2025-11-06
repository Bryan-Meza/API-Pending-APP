const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/users.js')

router.get('/', UserControllers.getAllUsers)
router.get('/:id', UserControllers.getUser)
router.post('/add', UserControllers.addUser)
router.put('/update/:id', UserControllers.updateUser)

module.exports = router;