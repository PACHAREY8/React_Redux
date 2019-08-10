import React, { Component } from 'react'
import  {userAction} from '../Actions/userAction';
import {connect} from 'react-redux'
// import { userRegister } from '../Services/service';
 class AdminSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            confirm_password: "",
            service: "",
            snackBarMessage: "",
            openSnackBar: false,
        }
    }
    handlefirstNameChange = event => {
        const firstName = event.target.value;
        this.setState({ firstName: firstName })
    }
    handlelastNameChange = event => {
        const lastname = event.target.value;
        this.setState({ lastName: lastname })
    }
    handlemailChange = event => {
        const userName = event.target.value;
        this.setState({ userName: userName })
    }
    handlepasswordChange = event => {
        const password = event.target.value;
        this.setState({ password: password })
    }
    handleconfirm_passwordChange = event => {
        const confirm_password = event.target.value;
        this.setState({ confirm_password: confirm_password })
    }
    handleserviceChange = event => {
        const service = event.target.value;
        this.setState({ service: service })
    }
    handleSubmit = event => {
        event.preventDefault();
            var data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.userName,
                password: this.state.password,

            }
            this.props.register(data)
            // // console.log("register data==>",data);
            // userRegister(data)
            //     .then((response) => {
            //         console.log(response)
            //         this.setState({
            //             openSnackBar: true,
            //             snackBarMessage: "Registered Successfully!!"
            //         })
            //         this.props.history.push("/login")

            //     })
            //     .catch((err) => {
            //         console.log(err);

            //     });

        };
    
    loginClick = () => {

        this.props.history.push('/adminSignIn')
    }
    handleSnackClose = () => {
        this.setState({
            openSnackBar: false
        })
    }
    render() {
        const { registering  } = this.props;
        return (
            <div>
            <form className="Reg_form">
                <div className="Reg_inner_div">
                    <div className="title">
                        <p>
                            <span style={{ color: "blue" }}>F</span>
                            <span style={{ color: "red" }}>U</span>
                            <span style={{ color: "yellow" }}>N</span>
                            <span style={{ color: "blue" }}>D</span>
                            <span style={{ color: "green" }}>O</span>
                            <span style={{ color: "red" }}>O</span>
                        </p>
                    </div>
                    <div className="headline">Create Your Fundoo Account</div>
                    <br></br>
                    <div className="reg_name">
                        <input id="outlined-name"
                            label="FirstName"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handlefirstNameChange}
                            margin="normal"
                            variant="outlined" />
                        <div className="lastName">
                            <input id="outlined-name"
                                label="LastName"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handlelastNameChange}
                                margin="normal"
                                variant="outlined" />
                        </div>
                    </div>
                    <br></br>
                    <div className="userName">
                        <input
                            style={{ width: "33.7rem" }} 
                            id="outlined-name"
                     label="UserName"
                     type="email"
                     autoComplete="email"
                     name = "userName"
                     value={this.state.email}
                     onChange={this.handlemailChange}
                     margin="normal"
                     variant="outlined"/>
                    </div>
                    <br></br>
                    <div className="reg_pass">
                        <input 
                         id="outlined-name"
                         label="Password"
                         type="password"
                         autoComplete="Password"
                         name = "password"
                         value={this.state.password}
                         onChange={this.handlepasswordChange}
                         margin="normal"
                         variant="outlined" />
                        <input className="lastName" 
                         id="outlined-name"
                         label="Confirm Password"
                         type="password"
                         autoComplete="confirm_password"
                         name = "confirm_password"
                         value={this.state.confirm_password}
                         onChange={this.handleconfirm_passwordChange}
                         margin="normal"
                         variant="outlined"/>
                    </div>
                    <br></br>
                    <div className="button-11">
                        <button class="btn btn-light button-1" onClick={this.loginClick}>
                            Sign In Instead
                        </button>
                        <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>
                            Sign Up
                        </button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </div>
            </form>
            
    </div>
        )
    }
}
function mapState(state){
    const {registering}=state;
    return registering
}
const actionCreator={
    register:userAction.register
}
export default connect(mapState,actionCreator)(AdminSignUp)