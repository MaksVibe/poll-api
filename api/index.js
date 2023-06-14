const express = require('express');
const router = express.Router();
const ctrlTechnology = require('../controllers');

router.get('/', ctrlTechnology.get);

router.get('/:id', ctrlTechnology.getById);

router.post('/', ctrlTechnology.create);

router.put('/:id', ctrlTechnology.update);

router.delete('/:id', ctrlTechnology.remove);

module.exports = router;
