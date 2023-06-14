const express = require('express');
const router = express.Router();
const ctrlTechnology = require('../controller');

router.get('/tasks', ctrlTechnology.get);

router.get('/tasks/:id', ctrlTechnology.getById);

router.post('/tasks', ctrlTechnology.create);

router.put('/tasks/:id', ctrlTechnology.update);

router.delete('/tasks/:id', ctrlTechnology.remove);

module.exports = router;
