import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  AdminSignUp  from "./Components/adminSignUp";
class App extends Component{
  render(){
    return(
      <div>  
         <Router>
         <Route exact path="/" component={AdminSignUp} ></Route>
          <Route path="/adminSignUp" component={AdminSignUp} ></Route>
        </Router> 
      </div>
    )
  }
}
export default App;
