const express = require('express');
const router = express.Router();
const userController = require('../controllers/User.controller');

router.get('/',userController.GetUsers);

router.post('/',userController.CrearUser);

module.exports = router;
