import React, { Component } from 'react'
import { userAction } from '../Actions/userAction';
import { connect } from 'react-redux';
import {authHeader} from '../Helpers/authHeader'
class AdminSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }
    handleEmailChange = event => {
        const email = event.target.value;
        this.setState({ email: email })
        console.log(this.state.email);
    }
    handlePasswordChange = event => {
        const password = event.target.value;
        this.setState({ password: password })
        console.log(this.state.password);
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var data = {
            'email': this.state.email,
            'password': this.state.password,
        }
        console.log("DATA_IN_ADMIN_SIGN_UP",data);
        
        this.props.login(data)
    }
    forgotPassClick = e => {
        e.preventDefault();
        this.props.history.push('/forgot')
    }
    registerClick = () => {
        this.props.history.push('/adminSignUp')
    }
    // dashboardClick = e => {
    //     e.preventDefault();
    //     this.props.history.push('/dashboard');

    // }
    render() {
        authHeader()
        const  signIn  = this.props
        console.log("state_cheking_for_signIn",signIn);

        return (
            <div className="main_div_login">
                <form className="login_form">
                    <p className="loginheadd">
                        <span style={{ color: "blue" }}>F</span>
                        <span style={{ color: "red" }}>U</span>
                        <span style={{ color: "yellow" }}>N</span>
                        <span style={{ color: "blue" }}>D</span>
                        <span style={{ color: "green" }}>O</span>
                        <span style={{ color: "red" }}>O</span>
                    </p>
                    <div className="ser_sign"><b>Sign In</b></div>
                    <div className="ser_contToFundoo">Continue to Fundoo</div>
                    <div>
                        <div>
                            <input
                                id="outlined-name"
                                label="EMAIL"
                                type="email"
                                autoComplete="email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                margin="normal"
                                variant="outlined" />
                        </div>
                        <div>
                            <input
                                id="outlined-name"
                                label="PASSWORD"
                                type="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                margin="normal"
                                variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-light">FORGOT PASSWORD</button>
                        <button class="btn btn-light" onClick={this.registerClick}>CREATE ACCOUNT</button>
                        <button class="btn btn-primary" onClick={this.handleSubmit}>SIGN IN</button>
                        {signIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
            </div>
        )
    }
}
function mapstate(state) {
    console.log("map state cheking",state);
    
    const signIn = state.LoginReducer.data;
    console.log("after state set in component",signIn);
    return  signIn 
}

const actionCreator = {
    login: userAction.login
}
export default connect(mapstate, actionCreator)(AdminSignIn)
