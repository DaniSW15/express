const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
    veterinarian: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ['programada', 'completada', 'cancelada'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', AppointmentSchema);
