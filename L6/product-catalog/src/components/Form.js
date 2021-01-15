import React from 'react'

const Form = () => {
    return (
        <form>
            <div className="mb-3">             
                <input type="text" className="form-control" id="" placeholder="Product name"/>
            </div>
            <div className="mb-4">
               <textarea className="form-control" id="" placeholder="Product description" rows="5"></textarea>
            </div>
            <div className="mb-3">
               <button className="btn btn-secondary p-1 w-100"   id="" >Add product</button>
            </div>
        </form>
    )
}

export default Form
