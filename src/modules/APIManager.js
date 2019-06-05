const remoteURL = "http://localhost:5002";

export default {
  get(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json());
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(e => e.json());
  },
  delete(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(e => e.json());
  },
  search(resource, input) {
    return fetch(`${remoteURL}/${resource}?name_like=${input}`).then(e =>
      e.json()
    );
  },
  post(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(e => e.json());
  },
  put(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
};
