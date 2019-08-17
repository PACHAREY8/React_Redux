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
          <Navbar.Brand href="#home">ADMIN  DASHBOARD</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#qnAComponent">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
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
