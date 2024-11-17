const Appointment = require('../models/Appointment');

const scheduleAppointment = async (req, res) => {
    try {
        const { pet, veterinarian, date, reason } = req.body;

        const appointment = new Appointment({
            pet,
            veterinarian,
            date,
            reason,
            status: 'programada'
        });

        await appointment.save();
        res.status(201).json({ message: 'Cita programada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { scheduleAppointment };
