const express = require('express');
const { scheduleAppointment } = require('../controllers/appointmentController');
const router = express.Router();

router.post('/schedule', scheduleAppointment);

module.exports = router;
