const Pet = require('../models/Pet');

const createPet = async (req, res) => {
    try {
        const { name, species, breed, age, owner } = req.body;

        const pet = new Pet({
            name,
            species,
            breed,
            age,
            owner
        });

        await pet.save();
        res.status(201).json({ message: 'Mascota creada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createPet };
