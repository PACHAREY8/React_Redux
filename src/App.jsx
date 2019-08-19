import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  AdminSignUp  from "./Components/adminSignUp";
import AdminSignIn from './Components/adminSignIn'
import DashboardComponent from './Components/dashboardComponent'
import QnAComponent from './Components/qnAComponent'
import PaymentComponent from './Components/paymentComponent'


class App extends Component{
  render(){
    return(
      <div>  
         <Router>
         <Route exact path="/" component={AdminSignIn} ></Route>
          <Route path ="/adminSignIn" component={AdminSignIn}></Route>
          <Route path ="/dashboardComponent" component={DashboardComponent}></Route>
          <Route path ="/qnAComponent" component={QnAComponent}></Route>
          <Route path ="/paymentComponent" component={PaymentComponent}></Route>
        </Router> 
      </div>
    )
  }
}
export default App;
