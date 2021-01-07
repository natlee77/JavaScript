//clean som mojligt

import React from 'react'
// for att använda f. Welcome och kunna skicka ut:
import ReactDom from 'react-dom'
import App from './app'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.bundle'

ReactDom.render(<App/>, document.getElementById('root'))



//------------------------------------------
// import Welcome1 from './components/welcome1'
// import Welcome2 from './components/welcome2'
// import Welcome3 from './components/welcome3'
// import Welcome4 from './components/welcome4'
//kan skriva olika set: set 1:fluttad to welcome1.js
/* function Welcome1(){
  return(
    <div>
      Hallo Nata and wellcome1 !
    </div>
  )
} */
//set 2-arror f.fluttad to welcome2.js
 /* const Welcome2=()=>{
  return(
    <div>
      Hallo Nata and wellcome2 !
    </div>
  )
 } */
 //set 3 -from reactjs.org-att göra mer komplex greer
 /* class Welcome3 extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
} */
//objecter som vi rendera(input data)-> what to display
//f.welcome bli komponent , vad det ska lägga på nånstan
//ReactDom.render(<Welcome1/>, document.getElementById('root'))
//ReactDom.render(<Welcome2/>, document.getElementById('root'))
//ReactDom.render(  <Welcome3 name="Taylor" />, document.getElementById('root'));
 //ReactDom.render(<Welcome4/>, document.getElementById('root'))
//-------------------------------

