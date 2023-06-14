const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const techRouter = require('./routes/index');
require('dotenv').config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/', techRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found, app' });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

module.exports = app;