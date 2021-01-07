import React from 'react'


export default function Alert() {
    return (
        //den del from getbootstrap.org(class=ClassName)->
        // ska install dependency del av bootstrap->
        //terminal - cmd-> npm install bootstrap( control i package.json)
        //import “..node_modules/bootstrap/dist/bootstrap.min.css”;-- index.js
        <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
        </div>
    )
}
