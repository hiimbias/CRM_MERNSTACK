const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;