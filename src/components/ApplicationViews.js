import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

class ApplicationViews extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ];

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ];

  animalsFromAPI = [
    { id: 1, name: "Chewie" },
    { id: 2, name: "Bob Barker" },
    { id: 3, name: "Mr. Furrley" },
    { id: 4, name: "Steven" },
    { id: 5, name: "Squirrelchaser 3000" }
  ];

  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay", phone: "615-373-1234" },
    { id: 2, name: "Emma Beaton", phone: "615-455-4551" },
    { id: 3, name: "Dani Adkins", phone: "615-373-8894" },
    { id: 4, name: "Adam Oswalt", phone: "718-956-3501" },
    { id: 5, name: "Fletcher Bangs", phone: "252-364-7503" },
    { id: 6, name: "Angela Lee", phone: "516-281-3946" }
  ];

  animalOwners = [
    { id: 1, animalId: 1, ownerId: 1 },
    { id: 2, animalId: 1, ownerId: 2 },
    { id: 3, animalId: 2, ownerId: 3 },
    { id: 4, animalId: 3, ownerId: 4 },
    { id: 5, animalId: 4, ownerId: 5 },
    { id: 6, animalId: 4, ownerId: 2 }
  ];

  state = {
    animalOwners: this.animalOwners,
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  };

  render() {
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
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
