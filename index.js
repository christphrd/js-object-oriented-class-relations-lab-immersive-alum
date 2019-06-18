let store = {
  drivers: [],
  passengers: []
}

let driverId = 0;

class Driver {
  constructor(id, name) {
    this.id = ++driverId;
    this.name = name;
  }
}