const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    diseases: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
}, { timestamps: true});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;