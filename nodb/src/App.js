import React, {Component} from 'react';

import './App.css';
import Header from './components/header/header'
import Bar1 from './components/bars/barOne'
import 'reset-css'
class App extends Component{

  constructor(){

    super()

    this.state = {
      list:[],
      todo:''

    }
  }

  

  
  render(){
    
    
    
    
    
    return(
     
      <div className="app-container">  
      
      <Header />
      <Bar1   />
       
      
      
      </div>
    )

  }
}



export default App;
