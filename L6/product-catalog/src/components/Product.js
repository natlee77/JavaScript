import React from 'react'

const Product = ({product,products,setProducts}) => {
  //f. knappen-filtrera(ta bort värde) , updatera(setProduct-all-over), sortera product i list
   const deleteHandler=()=>{
        setProducts(products.filter(
            item=>item.id !==product.id
        ))   }

    //instock<->outstock    
    const InStockHandler=()=>{
        setProducts(products.map(item =>{
                if(item.id === product.id) {
                    return{
                        ...item,inStock : !item.inStock //updatera true<->false
                    }
                }
                return item
            }
        ))
    }


    return (
        <div  className="border mb-2 p-1">
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${ product.inStock ? 'text-gray' : 'outstock' }`}>
                    <div className="prod-name" >{product.name} </div> 
                    <div className="prod-description">{product.description}</div>
                </div>
                {/* icon */}
                <div>
                   <i onClick={InStockHandler} className = { `fas fa-box cursor-pointer ${ product.inStock ? 'instock' : 'outstock' }` }></i>                
                   <i onClick={deleteHandler} className="fas fa-trash cursor-pointer"></i>
                </div>
            </div>
            
        </div>
    )
}

export default Product

/* if(product.inStock){  }
else{} */
//=== ${product.inStock ? 'in-stock':'out-stock'}