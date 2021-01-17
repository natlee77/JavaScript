import React, { useState } from 'react'       //rafce
import axios from 'axios'
import uuid from 'react-uuid'

const AddProductForm = ({ products, setProducts }) => {

    const [pname, setPName] = useState('')

    const pnameHandler = (e) => {
        setPName(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const product = {
            id: uuid(),
            name: pname
        }

        
        axios.post('https://win20-funcapp.azurewebsites.net/api/AddProducts', JSON.stringify(product))
        .then(res => {
            // setProducts(res.data)
            setProducts([...products, product])
        })

        // fetch('https://win20-funcapp.azurewebsites.net/api/AddProducts',{
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(product)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     // setProducts(res.data)
        //     setProducts([...products, product])
        // })

        setPName('')
    }

    return (
        <form className="row g-3">
            
            <div className="col-auto">
                <label htmlFor="pname" className="visually-hidden">Product Name</label>
                <input onChange={pnameHandler} value={pname} type="text" className="form-control" id="pname" placeholder="Product Name" autoComplete="off" />
            </div>
            <div className="col-auto">
                <button onClick={submitHandler} type="submit" className="btn btn-primary mb-3">Add Product</button>
            </div>
        </form>
    )
}

export default AddProductForm