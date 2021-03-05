const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SlotsSchema = new Schema({
    slot: {
        type: String,
        required: true
    }, seller: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Slots', SlotsSchema);