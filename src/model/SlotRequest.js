const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SlotRequestSchema = new Schema({
    slot: {
        type: String,
        required: true
    }, from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }, status: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('SlotRequest', SlotRequestSchema);