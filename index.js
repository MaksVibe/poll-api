const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routerApi = require('./routes/index.js');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const uriDb = process.env.MONGODB_URL;
const app = express();
// parse application/json
app.use(express.json());
// cors
app.use(cors());

mongoose.connect(uriDb);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error: '));
db.once('open', function () {
    console.log('Database connected successfully');
});

app.use('/', routerApi);
app.listen(PORT, function () {
    console.log(`Server is running at port ${PORT}`);
});

app.use((_, res, __) => {
    res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Use api on routes: /',
        data: 'Not found',
    });
});

app.use((err, _, res, __) => {
    console.log(err.stack);
    res.status(500).json({
        status: 'fail',
        code: 500,
        message: err.message,
        data: 'Internal Server Error',
    });
});
