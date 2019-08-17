import React, { Component } from 'react'
import AppBar from './appBar'
import { userCartList } from "../Services/service";
import { userAction } from '../Actions/userAction';
import { connect } from 'react-redux'

class PaymentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            listPerPage: 10,
            startIndex: 0,
            endIndex: 5,
            userList: []
        }
    }
    componentWillMount() {
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
    handleAdminApproval = (cartId) => {
        var data = {
            "cartId": cartId
        }
        this.props.Approval(data)
    }
    handleAdminReject = (cartId) => {
        var data = {
            "cartId": cartId
        }
        this.props.Reject(data)
    }
    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    pageNumber = (event) => {
        this.setState({
            currentPage: Number(event.target.id),
        })
    }

    prevPage = () => {
        this.setState({
            startIndex: this.state.startIndex - 1,
            endIndex: this.state.endIndex - 1,
            currentPage: this.state.currentPage - 1,
        })
    }

    nextPage = () => {
        this.setState({
            startIndex: this.state.startIndex + 1,
            endIndex: this.state.endIndex + 1,
            currentPage: this.state.currentPage + 1,
        })
    }

    render() {
        const { Approval } = this.props
        const { currentPage, listPerPage } = this.state;
        const { startIndex, endIndex } = this.state;
        // console.log("this.props", this.props.adminUserList);
    
        // Logic for displaying userlist
        const indexOfLastUser = currentPage * listPerPage;
        const indexOfFirstUser = indexOfLastUser - listPerPage;
        const userLists = this.state.userList.slice(indexOfFirstUser, indexOfLastUser);
    
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.userList.length / listPerPage); i++) {
            pageNumbers.push(i);
        }

        //rendering page numbers
        const renderPageNumbers = pageNumbers.slice(startIndex, endIndex).map(item => (
            <li className={currentPage === item ? 'page-item active' : 'page-item'} key={item}>
                <button className="page-link" style={{ width: "42px" }} onClick={(e) => this.pageNumber(e, item)}
                    id={item}>
                    {item}
                </button>
            </li>
        ));



        const PendingUser = this.state.userList.map((key) => {
            return ((key.status === 'pending') &&
                <tr>
                    <td>{key.user.firstName}</td>
                    <td>{key.user.lastName}</td>
                    <td>{key.user.service}</td>
                    {key.user.addresses.map(key=>{
                       return( <td>{key.address}</td>)
                    })
                        }
                    <td className="button_display_payment"><button class="btn btn-outline-success" onClick={() => this.handleAdminApproval(key.id)}>Approve</button>
                        <button class="btn btn-outline-danger" onClick={() => this.handleAdminReject(key.id)}>Reject</button></td>
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
                                        {"Address"}
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
                <div colSpan="4" style={{marginLeft:"15.2%"}}>
                <ul className="pagination" id="page-numbers" style={{ width: "35vh" }}>
                    <li><button onClick={this.prevPage} className={currentPage >= pageNumbers.length ? 'page-link disable' : 'page-link'}>PrevPage</button></li>
                    {renderPageNumbers}
                    <li><button onClick={this.nextPage} className="page-link">NextPage</button></li>
                </ul>
            </div>
   

            </div>
        )
    }
}
function mapState(state) {
    const isRejected = state;
    const Approval = state;
    return {isRejected, Approval}
}
const actionCreator = {
    Approval: userAction.Approval,
    Reject: userAction.Reject
}
export default connect(mapState, actionCreator)(PaymentComponent)