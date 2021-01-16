import React  from 'react'
import './App.css';
import Navbar from './components/Navbar'//1
import Main from './components/Main'//2
//manipulera DOM- i ViewPageSourse -ses inte
//kan se i Inspect-elements
function App() {
  
  
  return (
    <  >
       <Navbar/>
       {/*in Main -useState skicka ner-props(name, description) */}
       <Main /> 
    </ >
  );
}

export default App;//genom det - export default-kan döpa import(namn)vad jag vill
