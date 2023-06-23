const express = require('express');
const router = express.Router();
const { get, create, update, getById } = require('../controllers/index.js');
const { catchErrors } = require('../middlewares/catchErrors.js');

router.get('/frontend', catchErrors(get));
router.get('/backend', catchErrors(get));
router.get('/qa', catchErrors(get));
router.get('/pm', catchErrors(get));
router.get('/design', catchErrors(get));

router.get('/frontend/:id', catchErrors(getById));
router.get('/backend/:id', catchErrors(getById));
router.get('/qa/:id', catchErrors(getById));
router.get('/pm/:id', catchErrors(getById));
router.get('/design/:id', catchErrors(getById));

router.post('/frontend', catchErrors(create));
router.post('/backend', catchErrors(create));
router.post('/qa', catchErrors(create));
router.post('/pm', catchErrors(create));
router.post('/design', catchErrors(create));

router.put('/frontend/:id', catchErrors(update));
router.put('/backend/:id', catchErrors(update));
router.put('/qa/:id', catchErrors(update));
router.put('/pm/:id', catchErrors(update));
router.put('/design/:id', catchErrors(update));

module.exports = router;
