const express = require('express');
const router = express.Router();
const userController = require('../controllers/Login.controller');


router.post('/',userController.Login);

module.exports = router;
