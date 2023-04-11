// importing needed libraries.
const express       = require('express');
const APIRouter     = express.Router();
const APIController = require('../../controllers/productController');

// Setting up routing paths.
APIRouter.post('/create', APIController.createProduct);
APIRouter.post("/:id/update_quantity", APIController.updateProduct);
APIRouter.get("/",APIController.fetchProducts);
APIRouter.delete("/:id",APIController.deleteProduct);

// exporting the module.
module.exports = APIRouter;