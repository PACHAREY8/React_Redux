import React, { Component } from 'react'
import { UserStatics, getAdminUserList } from '../Services/service'
import AppBar from './appBar';
class DashboardComponent extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: 1,
      listPerPage: 10,
      startIndex: 0,
      endIndex: 5,
      AdminList: [],
      serviceDetails: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  componentWillMount() {
    this.userStatistics()
    this.GetAdminList()

  }
  userStatistics = () => {
    UserStatics()
      .then(response => {
        console.log("token", response);
        this.setState({
          serviceDetails: response.data.data.details
        })
        console.log("response from user statistics", this.state.serviceDetails);
      })
  }

  GetAdminList = () => {
    getAdminUserList()
      .then(response => {
        this.setState({
          AdminList: response.data.data.data
        })
        console.log("getting admin user list", this.state.AdminList);
      })
      .catch(err => {
        console.log("ERR_IN_GETTING_USER_LIST", err);

      })
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
    const { currentPage, listPerPage } = this.state;
    const { startIndex, endIndex } = this.state;
    // console.log("this.props", this.props.adminUserList);

    // Logic for displaying userlist
    const indexOfLastUser = currentPage * listPerPage;
    const indexOfFirstUser = indexOfLastUser - listPerPage;
    const userLists = this.state.AdminList.slice(indexOfFirstUser, indexOfLastUser);

    //rendering list of users
    const renderUserLists = userLists.map((key, index) => {
      return (
        <tr key={index} className="admin_data">
          <td>
            {key.firstName}
          </td>
          <td>
            {key.lastName}
          </td>
          <td>
            {key.email}
          </td>
          <td>
            {key.service}
          </td>
        </tr>


      )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.AdminList.length / listPerPage); i++) {
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
    const ServiceDetails = this.state.serviceDetails.map((key) => {
      return (
            <div className="service_check">
              <div className="card border-info mb-3 " >
                <div className="card-header service_" style={{  padding: "-0.75rem"}}>{key.service}</div>
                <div className="card-body text-info">
                  <h5 className="card-title" style={{  padding: "-0.75rem"}}>{key.count}</h5>
                </div>
              </div>
            </div>
            )
    })
    return (
      <div>
        <AppBar/>
        <div>
        <div className="servive_cards">
          {ServiceDetails}
        </div>
        <center>
          <div className="table-responsive"
            style={{ width: "66rem", padding: "2%",lineHeight:"2.5rem"}}>
            <table className="table table-stripped table-bordered table-hover ">
              <thead >
                <tr>
                  <th>
                    {"First Name"}
                  </th>
                  <th>
                    {"Last Name"}
                  </th>
                  <th>
                    {"Email"}
                  </th>
                  <th>
                    {"Service"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {renderUserLists}
              </tbody>
            </table>
          </div>
        </center>
        <div colSpan="4" style={{marginLeft:"13%"}}>
        <ul className="pagination" id="page-numbers" style={{ width: "35vh" }}>
            <li><button onClick={this.prevPage} className={currentPage >= pageNumbers.length ? 'page-link disable' : 'page-link'}>PrevPage</button></li>
            {renderPageNumbers}
            <li><button onClick={this.nextPage} className="page-link">NextPage</button></li>
        </ul>
    </div>
        </div>
      </div>
    )
  }
}
export default (DashboardComponent)