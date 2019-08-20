import React, { Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
export default class AppBar extends Component {
  handleUserList=()=>{
    window.location.href='/dashboardComponent'
  }
  handleQnAList=()=>{
    window.location.href='/qnAComponent'
  }
  handlePaymentList=()=>{
    window.location.href='/paymentComponent'
  }
  handleLogout=()=>{
    window.location.href='/adminSignIn'
  }

    render() {
        return (
          <Navbar bg="light" variant="light">
          <Navbar.Brand onClick={this.handleUserList}>ADMIN  DASHBOARD</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={this.handleUserList}>USERS</Nav.Link>
            <Nav.Link onClick={this.handleQnAList}>Q & A</Nav.Link>
            <Nav.Link  onClick={this.handlePaymentList}  >PAYMENT</Nav.Link>
          </Nav>
          <Form inline>
            <Button className="btn btn-outline-dark button1"  onClick={this.handleLogout}>LOGOUT</Button>
          </Form>
        </Navbar>
          //   <div>
          //   <nav className="navbar">
          //   <div className="admin_">ADMIN  DASHBOARD</div>
          //   <div className="Button_Adjust">
          //     <button className="btn btn-outline-secondary button" onClick={this.handleUserList}>USERS</button>
          //     <button className="btn btn-outline-secondary button" onClick={this.handleQnAList}>Q & A</button>
          //     <button className="btn btn-outline-secondary button" onClick={this.handlePaymentList} >PAYMENT</button>
          //   </div>
          //   <button className="btn btn-outline-dark button1"  onClick={this.handleLogout}>LOGOUT</button>
          // </nav>
          //   </div>
        )
    }
}
