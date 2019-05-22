import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import Footer from "./footer/Footer";
import APIManager from "../modules/APIManager";

import "./Kennel.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Kennel extends Component {
  state = {
    searchResults: []
  };

  getSearchResults = input => {
    console.log("GETSEARCH INPUT:", input);
    let newSearchResults = [];
    APIManager.search("animals", input)
      .then(results => (newSearchResults = results))
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
        <NavBar
          getSearchResults={this.getSearchResults}
          searchResults={this.state.searchResults}
        />
        <ApplicationViews searchResults={this.state.searchResults} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Kennel;
