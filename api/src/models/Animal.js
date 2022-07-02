const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema(
    {
        senasaId: {
            type: String,
            require: true,
            unique: true,
            max: 16
        },
        animalTipo: {
            type: String,
            require: true,
            enum: ['Novillo', 'Toro', 'Vaquillona']
        },
        pesoKg: {
            type: Number,
            require: true,
        },
        potreroNombre: {
            type: String,
            require: true,
            max: 200
        },
        dispositivoTipo: {
            type: String,
            require: true,
            enum: ['COLLAR', 'CARAVANA'],
        },
        dispositivoNro: {
            type: String,
            require: true,
            max: 8
        },
    }, { timestamps: false, versionKey: false }
)

module.exports = Animal = mongoose.model('animals', animalSchema);
