//rfc
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'//use navbar

import Welcome1 from './components/welcome1'
import Welcome2 from './components/welcome2'
import Welcome3 from './components/welcome3'
import Welcome4 from './components/welcome4'

import Alert from './components/alert'
import Navbar from './components/navbar'




export default function App() {
    return (
        <div>
            <Navbar />
            <Alert/>
             Nata
            <Welcome1/>
            <Welcome2/>
            <Welcome3/>
            <Welcome4/>

           
        </div>
    )
}

