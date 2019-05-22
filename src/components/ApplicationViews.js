import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import SearchResults from "./search/SearchResults";
import APIManager from "../modules/APIManager";

class ApplicationViews extends Component {
  state = {
    animalOwners: [],
    owners: [],
    employees: [],
    locations: [],
    animals: []
  };

  componentDidMount() {
    console.log("APP VIEWS Component Did Mount");

    APIManager.getAll("animalOwners").then(ao =>
      this.setState({ animalOwners: ao })
    );

    APIManager.getAll("owners").then(owners =>
      this.setState({ owners: owners })
    );

    APIManager.getAll("employees").then(employees =>
      this.setState({ employees: employees })
    );

    APIManager.getAll("locations").then(locations =>
      this.setState({ locations: locations })
    );

    APIManager.getAll("animals").then(animals =>
      this.setState({ animals: animals })
    );
  }

  deleteAnimal = id => {
    APIManager.delete("animals", id)
      .then(() => APIManager.getAll("animals"))
      .then(items => {
        console.log(items);
        this.setState({ animals: items });
      });
  };

  render() {
    console.log("APP VIEWS Render");
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <LocationList locations={this.state.locations} />;
          }}
        />
        <Route
          path="/animals"
          render={props => {
            return (
              <AnimalList
                animals={this.state.animals}
                owners={this.state.owners}
                animalOwners={this.state.animalOwners}
                deleteAnimal={this.deleteAnimal}
              />
            );
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return <OwnerList owners={this.state.owners} />;
          }}
        />
        <Route
          path="/search"
          render={props => {
            return <SearchResults searchResults={this.props.searchResults} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
