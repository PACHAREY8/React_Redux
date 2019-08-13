import React, { Component } from 'react'
import {UserStatics} from '../Services/service'

export default class DashboardComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      serviceDetails:[]
    }
  }
  componentWillMount() {
    UserStatics()
    .then(response=>{
      console.log("token",response);
      this.setState({
        serviceDetails:response.data.data.details
      })
      console.log("response from user statistics",this.state.serviceDetails);
      
      
    })
  }
    render() {
      const ServiceDetails=this.state.serviceDetails.map((key)=>{
        console.log(key);
        return (
            <div>
               <div className="service_check">
               <div class="card border-info mb-3">
               <div class="card-header service_">{key.service}</div>
               <div class="card-body text-info">
                 <h5 class="card-title">{key.count}</h5>
               </div>
               </div>
               </div>
            </div>
        )
      })
return(
  <div>
  <nav class="navbar">
  <div className="admin_">ADMIN  DASHBOARD</div>
  <div className="Button_Adjust">
  <button  class="btn btn-outline-secondary button">USERS</button>
  <button class="btn btn-outline-secondary button">Q & A</button>
  <button class="btn btn-outline-secondary button">PAYMENT</button>
  </div>
  <button class="btn btn-outline-dark button1">LOGOUT</button>
  </nav>
  <div className="servive_cards">
  {ServiceDetails}
  </div>
  </div>
)
    }
}
