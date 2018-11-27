function Airport(weather, capacity = 5) {
  this.container = []
  this.capacity = capacity
  this.weather = weather
}


Airport.prototype.land = function(plane) {
  if (this.container.length === this.capacity) {
    throw new Error('Airport full');
  } else if (this.weather.randomizer() === 'Stormy') {
    throw new Error('Stormy weather');
  } else if (plane.isLanded === true) {
    throw new Error('Plane already landed');
  } else {
  this.container.push(plane)
  plane.isLanded = true;
  }
};

Airport.prototype.takeOff = function(plane) {
  if (this.weather.randomizer() === 'Stormy') {
    throw new Error('Stormy weather');
  }
  this.container.pop(plane)
  plane.isLanded = false;
};
