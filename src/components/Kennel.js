import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import Footer from "./footer/Footer";
import APIManager from "../modules/APIManager";

import "./Kennel.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Kennel extends Component {
  state = {
    searchResults: [],
    searchInput: ""
  };

  getSearchResults = input => {
    // console.log("GETSEARCH INPUT:", input);
    this.setState({ searchInput: input });
    let newSearchResults = [];
    APIManager.search("animals", input)
      .then(results => (newSearchResults = results))
      //  * include search across all sections below
      .then(() => APIManager.search("employees", input))
      .then(results => results.forEach(result => newSearchResults.push(result)))
      .then(() => APIManager.search("owners", input))
      .then(results => results.forEach(result => newSearchResults.push(result)))
      .then(() => APIManager.search("locations", input))
      .then(results => results.forEach(result => newSearchResults.push(result)))
      .then(() => this.setState({ searchResults: newSearchResults }));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar getSearchResults={this.getSearchResults} />
        <ApplicationViews
          searchResults={this.state.searchResults}
          searchInput={this.state.searchInput}
        />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Kennel;
