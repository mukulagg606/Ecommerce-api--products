// Importing required libraries.
const express   = require('express');
const router    = express.Router();
const APIRouter = require('./v1/index');

// Routing products to it's separate router.
router.use('/products', APIRouter);


// Exporting the module.
module.exports = router;