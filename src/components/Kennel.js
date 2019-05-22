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
    APIManager.search(input).then(results => {
      this.setState({ searchResults: results });
      console.log("SEARCH RESULTS", results);
    });
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
