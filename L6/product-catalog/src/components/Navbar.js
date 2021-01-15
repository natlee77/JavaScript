//refce
import React from 'react'
import logo from '../assets/logo.svg'

//style var1
/* const styling ={
    color: "white",
    backgroundColor: "black"
} */
const Navbar = () => {
    return (       
                       
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo}  width="30" height="30" className="d-inline-block align-top" alt=""/> 
                    {/* var1 */}
                    {/* <span className="" style={styling}> Bootstrap </span> */}
                    {/* var2 */}
                    <span className="ms-2" style={{marginLeft: "1rem"}}> Product Catalog </span>
                </a>
            </div>
        </nav>        
    )
}

export default Navbar
