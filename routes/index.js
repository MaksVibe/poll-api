const express = require('express');
const {
    getTechnologies,
    getTechnology,
    addTechnology,
    updateTechnology,
    deleteTechnology,
} = require('../controllers/index');
const { catchErrors } = require('../middlewares/catchErrors');

const router = express.Router();

router.get('/', catchErrors(getTechnologies));

router.get('/:name', catchErrors(getTechnology));

router.post('/', catchErrors(addTechnology));

router.put('/:TechnologyId', catchErrors(updateTechnology));

router.delete('/:TechnologyId', catchErrors(deleteTechnology));

module.exports = router;
