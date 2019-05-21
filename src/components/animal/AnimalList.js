import React, { Component } from "react";

class AnimalList extends Component {
  findOwners(animal) {
    let animalOwners = this.props.animalOwners
      .filter(ao => animal.id === ao.animalId)
      .map(ao => this.props.owners.find(owner => owner.id === ao.ownerId).name);

    console.log("OwnerIds", animalOwners);

    if (animalOwners.length === 0) {
      animalOwners = ["no current owner"];
    }
    return animalOwners;
  }

  render() {
    return (
      <section className="animals">
        <h1>Animals</h1>
        {this.props.animals.map(animal => (
          <div key={animal.id}>
            <h2>{animal.name}</h2>
            <p>Owned by:</p>
            <ul>
              {this.findOwners(animal).map(owner => (
                <li key={owner}>{owner}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
}

export default AnimalList;
