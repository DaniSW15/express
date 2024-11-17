const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, enum: ['perro', 'gato'], required: true },
    breed: { type: String },
    age: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    medicalHistory: [
        {
            date: { type: Date, required: true },
            description: { type: String, required: true },
            veterinarian: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);
