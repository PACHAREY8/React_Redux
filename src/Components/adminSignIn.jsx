import React, { Component } from 'react'
import { userAction } from '../Actions/userAction';
import { connect } from 'react-redux';
import { authHeader } from '../Helpers/authHeader'
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
    }
    handlePasswordChange = event => {
        const password = event.target.value;
        this.setState({ password: password })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        var data = {
            'email': this.state.email,
            'password': this.state.password,
        }
        console.log("DATA_IN_ADMIN_SIGN_UP", data);

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
        return (
            <div className="main_div_login" >
                <form className="login_form">
                    <p className="loginheadd">
                        <span style={{ color: "blue" }}>F</span>
                        <span style={{ color: "red" }}>U</span>
                        <span style={{ color: "#F4B400" }}>N</span>
                        <span style={{ color: "blue" }}>D</span>
                        <span style={{ color: "green" }}>O</span>
                        <span style={{ color: "red" }}>O</span>
                    </p>
                    <div className="ser_sign"><b>Sign In</b></div>
                    <div className="ser_contToFundoo">Continue to Fundoo</div>
                    <div className="form-group">
                        <label htmlFor="usr">Email:</label>
                        <input type="email" className="form-control" id="email"   value={this.state.email}
                             onChange={this.handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="password" value={this.state.password}
                             onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="button_11">
                        <div>
                            <div>
                                <button className="btn btn-light" style={{ fontSize: "11px" }}>FORGOT PASSWORD</button>
                            </div>
                            <div>
                                <button className="btn btn-light" style={{ fontSize: "11px" }} onClick={this.registerClick}>CREATE ACCOUNT</button>
                            </div>
                        </div>
                        <button className="btn btn-outline-primary sign_In_button" style={{ fontSize: "15px" }} onClick={this.handleSubmit}>SIGN IN</button>
                    </div>
                </form>
            </div>
        )
    }
}
function mapstate(state) {
    const signIn = state
    return signIn
}

const actionCreator = {
    login: userAction.login
}
export default connect(mapstate, actionCreator)(AdminSignIn)
