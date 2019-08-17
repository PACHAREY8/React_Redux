import React, { Component } from 'react'
import AppBar from './appBar'
import { getUnapprovedAnswer } from '../Services/service';
import { connect } from 'react-redux';
import { userAction } from '../Actions/userAction';

 class QnAComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unApproved: [],
            currentPage: 1,
            listPerPage: 10,
            startIndex: 0,
            endIndex: 5,
            isApproved:false
        }
    }
    componentWillMount() {
        getUnapprovedAnswer()
            .then(response => {
                console.log("RES_FROM_GETTING_UNAPPROVED_ANSWER", response);
                this.setState({
                    unApproved: response.data.data
                })
                console.log("AFTER_SETSTATE_RES_FROM_GETTING_UNAPPROVED_ANSWER", this.state.unApproved);
            })
            .catch(err => {
                console.log("ERR_IN_GETTING_UNAPPROVED_ANSWER", err);

            })
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
    handleQnAApproval = (parentId) => {
       console.log(parentId);
       this.setState({
           isApproved:true
       })
        this.props.ansApproval(parentId,this.state.isApproved)
    }
    handleQnAReject= (parentId) => {
        console.log(parentId);
        this.setState({
            isApproved:false
        })
         this.props.ansReject(parentId,this.state.isApproved)
     }
    render() {
        const {ansApproval}=this.props
        console.log("props from ans approval",this.props);
        
        const { currentPage, listPerPage } = this.state;
        const { startIndex, endIndex } = this.state;
        // console.log("this.props", this.props.adminunApproved);

        // Logic for displaying unApproved
        const indexOfLastUser = currentPage * listPerPage;
        const indexOfFirstUser = indexOfLastUser - listPerPage;
        const unApproveds = this.state.unApproved.slice(indexOfFirstUser, indexOfLastUser);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.unApproved.length / listPerPage); i++) {
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

        var UnapprovedArray = this.state.unApproved.map(key => {

            return (
                <tr>
                    <td dangerouslySetInnerHTML={{ __html: key.message }}>
                    </td>
                    <td className="button_display_payment"><button class="btn btn-outline-success" onClick={() => this.handleQnAApproval(key.id)}>Approve</button>
                        <button class="btn btn-outline-danger" onClick={() => this.handleQnAReject(key.id)}>Reject</button></td>
                </tr>
            )
        })
        return (
            <div>
                <AppBar />
                <center>
                    <div className="table-responsive"
                        style={{ width: "80rem", padding: "2%" }}>
                        <table className="table table-stripped table-bordered table-hover ">
                            <thead >
                                <tr className="table_content_payment">
                                    <th>
                                        {"Question List"}
                                    </th>
                                    <th>
                                        {"Action"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {UnapprovedArray}
                            </tbody>
                        </table>
                    </div>
                </center>
                <div colSpan="4" style={{ marginLeft: "15.2%" }}>
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
function mapState(state){
    const ansApproval=state;
    const ansRejection=state
    return {ansApproval,ansRejection}
}
const actionCreator={
    ansApproval:userAction.ansApproval,
    ansReject:userAction.ansReject
}

export default connect(mapState,actionCreator)(QnAComponent)