import React from 'react'
import  { useState } from 'react'// hooks
import  uuid from 'react-uuid'
//skapat useState i APP.js //hear vi have inputs som ska hantera
//(props)-hämta from Main.js
//formular ska inte lista product -->only update

const Form = ({products, setProducts}) => {
    //state:
    const[name, setName] =useState('')
    const[description, setDescription] =useState('')
    const[submitState, setSubmitState] =useState(true) //for att disabled from början

    // for att hantera setName , setDescription -> f. :
    const nameHandler = (e) =>{
        //null ställe validering-btn "add product"
        e.target.value.length >= 2 ?  setSubmitState(false) : setSubmitState(true)
        /* if(e.target.value < 2){
            //disabled click --1.document.getbyid-- 2.state'
            setSubmitState(true)
        }
        else {setSubmitState(false)} */


        setName(e.target.value)    //++ onChange
    }
    const descriptionHandler = (e) =>{
        setDescription(e.target.value)    //++ onChange-event-kan matta in info & update
    }
     //formular ska inte lista product -->only update->skapa f.:
     const submitHandler = (e) =>{
        e.preventDefault()        //jag bestämer - action på knappen
        setProducts([
            ...products,         //...sprädd=tar gamla []array +lägga in nyskapad object 
                { name : name,
                 description : description, 
                 inStock : true, 
                 id : uuid() }])    //{}ska göra object-skapa product 

            //null ställe
            setName('')
            setDescription('')
            setSubmitState(true)
    }


    return (
        <form>
            <div className="mb-3">             
                <input  onChange={nameHandler} value={name} type="text" className="form-control" placeholder="Product name"/>
            </div>
            <div className="mb-4">
               <textarea onChange={descriptionHandler} value={description} className="form-control" id="" placeholder="Product description" rows="5"></textarea>
            </div>
            <div className="mb-3">
                {/* när trycker knapp -onClick*/}
               <button  onClick={submitHandler} disabled={submitState} className="btn btn-secondary p-1 w-100"  type="submit"  >Add product</button>
            </div>
        </form>
    )
}

export default Form
