import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import AnimalForm from "./animal/AnimalForm";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalEditForm from "./animal/AnimalEditForm";
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
        this.props.history.push("/animals");
      });
  };

  addAnimal = animal =>
    APIManager.post(animal)
      .then(() => APIManager.getAll("animals"))
      .then(animals =>
        this.setState({
          animals: animals
        })
      );

  updateAnimal = editedAnimalObject => {
    return APIManager.put(editedAnimalObject)
      .then(() => APIManager.getAll("animals"))
      .then(animals => {
        this.setState({
          animals: animals
        });
      });
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
          exact
          path="/animals"
          render={props => {
            return (
              <AnimalList
                {...props}
                animals={this.state.animals}
                owners={this.state.owners}
                animalOwners={this.state.animalOwners}
                deleteAnimal={this.deleteAnimal}
              />
            );
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return (
              <AnimalForm
                {...props}
                addAnimal={this.addAnimal}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={props => {
            // Find the animal with the id of the route parameter
            let animal = this.state.animals.find(
              animal => animal.id === parseInt(props.match.params.animalId)
            );

            // If the animal wasn't found, create a default one
            if (!animal) {
              animal = { id: 404, name: "404", breed: "Dog not found" };
            }

            return (
              <AnimalDetail
                {...props}
                animals={this.state.animals}
                animal={animal}
                deleteAnimal={this.deleteAnimal}
              />
            );
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return (
              <AnimalEditForm
                {...props}
                employees={this.state.employees}
                updateAnimal={this.updateAnimal}
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
            return (
              <SearchResults
                {...props}
                {...this.props}
                // searchResults={this.props.searchResults}
                // searchInput={this.props.searchInput}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(ApplicationViews);
