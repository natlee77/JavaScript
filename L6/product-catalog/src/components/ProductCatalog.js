import React from 'react'
import Product from './Product'//5

const ProductCatalog = ({products ,setProducts}) => {
    //randera ut olicka product i catalog
    //null-ställe
    if (products.length ===0){
        return (
            <div id="prod-catalog" className="mb-5 text-center" >
                No product found , please add product                          
            </div>
        ) 
    }
    //++ product to catalog
    return (
        <div id="prod-catalog" className="mb-5">
                        {/* <Product--js// map()-call each element in an array, in order.  /> */}
            {
                products.map(product=>(
                //    child  måste har unik key
                    <Product product={product} key={product.id} products={products} setProducts={setProducts}/> 
                ))
            }
                      
        </div>
    )
}

export default ProductCatalog

