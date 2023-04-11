# Ecommerce-API for Admin to manage products

## This API supports 4 operations


## URL [POST]: /products/create
<pre>
//request
    product: {
        name: laptop,
        quantity: 10
    }

//response
    data: {
        product: {
            name: laptop,
            quantity: 10
        }
    }
</pre>
## API to list products
## URL [GET] : /products
<pre>
data: {
  products: [
   {
     id: 1,
     name: laptop
     quantity: 10
   },
   {
     id: 2,
     name: camera
     quantity: 5
   },
   {
     id: 3,
     name: smartwatch
     quantity: 8
   },
  ]

}
</pre>
## API to delete products
## URL [DELETE] : /products/:id
<pre>
// response
data: {
  message: “product deleted”
}
</pre>

## API to update quantity of a product (can be incremented or decremented)
## URL [POST] : /products/:id/update_quantity/?number=10
<pre>
// response
data: {
  product: {
     id: 1,
     name: laptop,
     quantity: 20
  },

  message: updated successfully
}
</pre>
#### To use the API simply clone the repo in your local machine and run
### npm i
#### then run 
### npm start