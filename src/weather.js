function Weather() {
  this.randweather = ['Sunny', 'Stormy']
}

Weather.prototype.randomizer = function () {
    return this.randweather[Math.floor(Math.random() * this.randweather.length)];
};
 
