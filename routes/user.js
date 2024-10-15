const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user');
const logger = require('../middleware/logger');

router.get('/',logger, getUsers);

module.exports = router;
