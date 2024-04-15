const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');
const { validatePhoneNumber, authenticateToken } = require('../middlewares/authMiddleware');

router.post('/login', validatePhoneNumber, authController.login);
router.post('/register', validatePhoneNumber, authController.register);
router.get('/validate-token', authenticateToken, authController.validateToken);

module.exports = router;
