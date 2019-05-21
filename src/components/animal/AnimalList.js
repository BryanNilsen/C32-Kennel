import React, { Component } from "react";

class AnimalList extends Component {
  findOwners(animal) {
    let animalOwners = this.props.animalOwners
      .filter(ao => animal.id === ao.animalId)
      .map(ao => this.props.owners.find(owner => owner.id === ao.ownerId));

    if (animalOwners.length === 0) {
      animalOwners = [{ id: 0, name: "", phone: 0 }];
    }
    return animalOwners;
  }

  render() {
    this.props.animals.map(animal => console.log(this.findOwners(animal)));

    return (
      <section className="animals">
        <h1>Animals</h1>
        {this.props.animals.map(animal => (
          <div key={animal.id}>
            <h2>{animal.name}</h2>
            <p>Owned by:</p>
            <ul>
              {this.findOwners(animal).map(owner =>
                owner.phone ? (
                  <li key={owner.id}>
                    {owner.name}: {owner.phone}
                  </li>
                ) : (
                  <li key={owner.id}>No current owner</li>
                )
              )}
            </ul>
          </div>
        ))}
      </section>
    );
  }
}

export default AnimalList;
