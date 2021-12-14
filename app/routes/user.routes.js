const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();

//tus rutas
router.get('/', userController.get)

module.exports = router;