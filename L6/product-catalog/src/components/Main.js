//refce
import React from 'react'
import Form from './Form'//3
import ProductCatalog from './ProductCatalog'//4

const Main = () => {
    return (
        <main className="container pt-3"  > 
          {/* dela skärm i 2 del /gatter-mellanrum*/}
           <div className="row g-5 ">
               <div className="col-5"> 
                    <Form/>
               </div>
               <div className="col-7">
                   <ProductCatalog/>
               </div>
           </div>
        </main>
    )
}

export default Main
