const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const technologySchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
        required: [true, 'Technology name is required'],
    },
    amount: Number,
});

const Frontend = mongoose.model('technology', technologySchema, 'frontend');
const Backend = mongoose.model('technology', technologySchema, 'backend');
const QA = mongoose.model('technology', technologySchema, 'qa');
const PM = mongoose.model('technology', technologySchema, 'pm');
const Design = mongoose.model('technology', technologySchema, 'pm');

module.exports = { Frontend, Backend, QA, PM, Design };
