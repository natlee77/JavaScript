//refce
import React from 'react'
import { useState } from 'react'// hooks
import Form from './Form'//3
import ProductCatalog from './ProductCatalog'//4

//hämta ut from App.js -props-()
const Main = () => {
    //state:
    const[products, setProducts] =useState([])

    return (
        <main className="container pt-3"  > 
                                        {/* dela skärm i 2 del /gatter-mellanrum*/}
           <div className="row g-5 ">
               <div className="col-5"> 
                                        {/* skick ner product setProduct i form - props */}
                    <Form products={products}  setProducts={setProducts} />
               </div>
                                        {/* punkt connecting form <->productCatalog /skicka product to catalog*/}
               <div className="col-7">
                   <ProductCatalog products={products} setProducts={setProducts} />
               </div>
           </div>
        </main>
    )
}

export default Main
