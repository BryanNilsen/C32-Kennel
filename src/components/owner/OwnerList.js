import React, { Component } from "react";

class OwnerList extends Component {
  render() {
    return (
      <section className="owners">
        <h1 className="page_title">Owners</h1>
        {this.props.owners.map(owner => (
          <div key={owner.id} className="result_card">
            <h2>{owner.name}</h2>
            <p>{owner.phone}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default OwnerList;
