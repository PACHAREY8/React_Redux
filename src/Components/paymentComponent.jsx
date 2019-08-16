import React, { Component } from 'react'
import AppBar from './appBar'
import { userCartList } from "../Services/service";

export default class PaymentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }
    componentDidMount() {
        userCartList()
            .then(response => {
                this.setState({
                    userList: response.data.data
                })
                console.log('RES_FROM_USER_CART_LIST', this.state.userList)
            })
            .catch(err => {
                console.log('ERR_IN_GETTING_USER_LIST', err)
            })
    }
    handleAdminApproval=(cartId)=>{
       var data={
           "cartId":cartId
        }
        this.props.approval(data)
    }

    render() {

        const PendingUser = this.state.userList.map((key) => {
            return ((key.status === 'pending') &&
                <tr>
                    <td>{key.user.firstName}</td>
                    <td>{key.user.lastName}</td>
                    <td>{key.user.service}</td>
                    <td>{key.price}</td>
                    <td className="button_display_payment"><button class="btn btn-outline-success" onClick={this.handleAdminApproval(key.id)}>Approve</button>
                    <button class="btn btn-outline-danger" >Reject</button></td>
                </tr>
            )

        })
        return (
            <div className="pending_user_list">
                <AppBar />
                <center>
                    <div className="table-responsive"
                        style={{ width: "80rem", padding: "2%" }}>
                        <table className="table table-stripped table-bordered table-hover ">
                            <thead >
                                <tr className="table_content_payment">
                                    <th>
                                        {"FirstName"}
                                    </th>
                                    <th>
                                        {"LastName"}
                                    </th>
                                    <th>
                                        {"Service"}
                                    </th>
                                    <th>
                                        {"Charges"}
                                    </th>
                                    <th>
                                        {"Action"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {PendingUser}
                            </tbody>
                        </table>
                    </div>
                </center>

            </div>
        )
    }
}
