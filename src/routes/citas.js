const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');
const authMiddleware = require('../middleware/authMiddleware');
const citaSwaggerSchema = require('../schemas/citaSchema');

router.post('/confirm-response', authMiddleware, citasController.confirmarCita);
router.post('/cancel-response', authMiddleware, citasController.cancelarCita);

module.exports = router;