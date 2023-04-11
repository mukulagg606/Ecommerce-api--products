// importing required libraries.
const model = require('../models/products');

// Defining controller object(for importing purpose.)
let APIController = {};

// Create a product.
APIController.createProduct = async(req, res)=>{
    let product;
    //First finding the last added product for setting the id of new product
    let data= await model.findOne({}).sort({'id':-1});

    if(data==null){ //If the list is empty this will be your first product 
     product = await model.create({
        name:req.body.name,
        quantity:req.body.quantity,
        id:1
    })}
    else{ //id of new product will be +1 of the last product
         product = await model.create({
            name:req.body.name,
            quantity:req.body.quantity,
            id:data.id + 1
    })
}
    
            return res.status(200).json({ // Saved successfully.
                data: {
                    product: {
                        name     : product.name,
                        quantity : product.quantity
                    }
                }
            })
        };


//Fetch all products
APIController.fetchProducts = async function(req,res){
const products = await model.find({}).select('id name quantity');
            return res.status(200).json({
                data: {
                    products: products
                }
            })
        }          

// Delete function.
APIController.deleteProduct = async (req,res) =>{
    // Call delete on DB using ID.
    await model.findByIdAndDelete({_id: req.params.id});
      
        // Deleted successfully.
        return res.status(200).json({
            data: {
                message: "product deleted"
            }
        })
    }


// Update product in DB.
APIController.updateProduct = async (req,res)=>{
    // Find the object in DB
   const product = await model.findOne({_id:req.params.id});
       
        // Product found. Update  the quantity.
        let productQuantity = Number(product.quantity) + Number(req.query.number);  
        // Call update.
       const updatedProduct = await model.updateOne({_id:req.params.id},{
        quantity : String(productQuantity)
       });
    
            // update success.
            return res.status(200).json({
                data : {
                    product:{
                        id:product.id,
                        name:product.name,
                        quantity:productQuantity
                    },
                    message: "Updated successfully"
                }
            })
        };
    
// Export the module.
module.exports = APIController;