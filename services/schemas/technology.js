const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const technology = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Technology name is required'],
    },
    amount: {
        type: Number,
        unique: true,
    },
});

const Technology = mongoose.model('technology', technology);

module.exports = Technology;
