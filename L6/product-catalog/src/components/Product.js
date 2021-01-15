import React from 'react'

const Product = () => {
    return (
        <div  className="border mb-2 p-1">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="prod-name" >Product Name </div> 
                    <div className="prod-description">Product description</div>
                </div>
                {/* icon */}
                <div>
                   <i className="fas fa-box"></i>                
                   <i className="fas fa-trash"></i>
                </div>
            </div>
            
        </div>
    )
}

export default Product
