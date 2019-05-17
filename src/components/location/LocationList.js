import React, { Component } from "react";
import { directive } from "@babel/types";

export default class LocationList extends Component {
  render() {
    return (
      <section className="locations">
        <h3>Instructor Kennels</h3>
        {this.props.locations.map(location => (
          <div key={location.id}>
            <h4>{location.name}</h4>
            <h5>{location.address}</h5>
          </div>
        ))}
      </section>
    );
  }
}
