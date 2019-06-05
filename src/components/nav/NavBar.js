import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  handleSearch(input) {
    console.log(input.target.value);
    // only search on enter/return keypress
    if (input.keyCode === 13) {
      console.log("HANDLE SEARCH - INPUT TARGET VALUE:", input.target.value);
      this.props.getSearchResults(input.target.value);
      this.props.history.push("/search");
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow bg-dark">
        <ul className="nav nav-pills">
          <li className="font-weight-bold nav-link text-light">KENNEL</li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Locations
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/animals">
              Animals
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/employees">
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/owners">
              Owners
            </Link>
          </li>
          <li className="nav-item">
            <div className="input-group input-group-sm mb-2 mt-1 ml-4">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  <Link to="/search">Search</Link>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onKeyUp={e => this.handleSearch(e)}
              />
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
