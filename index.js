let store = {drivers: [], trips: [], passengers: []};
let driverId = 0;
let tripId = 0;
let passengerId = 0;


class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
}

class Passenger {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.passengers.push(this);
  }
}

class Trip {
  constructor(passenger, driver) {
    this.id = ++tripId;
    store.trips.push(this);
  }
}
