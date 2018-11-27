
describe("Airport", function() {
  var airport;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather, 10);
  });

    it('Can override capacity', function() {
      expect(airport.capacity).toEqual(10)
    });

    it('Can land planes at the airport', function() {
      spyOn(weather, 'randomizer').and.returnValue('Sunny')
      airport.takeOff(plane);
      airport.land(plane);
      expect(airport.container).toEqual([plane])
    });

    it('Can takeOff planes at the airport', function() {
      spyOn(weather, 'randomizer').and.returnValue('Sunny')
      airport.takeOff(plane)
      expect(airport.container.length).toEqual (0);
    });

    it('Cannot land at a full aiport', function() {
      spyOn(weather, 'randomizer').and.returnValue('Sunny')
      airportLimitedCapacity = new Airport(weather, 1);
      plane1 = new Plane();
      plane2 = new Plane();

      airportLimitedCapacity.takeOff(plane1)
      airportLimitedCapacity.land(plane1)
      airportLimitedCapacity.takeOff(plane2)
      airportLimitedCapacity.land(plane2)

      expect(function() {
        airportLimitedCapacity.land(plane2);
      }).toThrowError('Airport full');

  });

   it('Cannot land if weather is stormy', function() {
     spyOn(weather, 'randomizer').and.returnValue('Stormy')
     expect(function() {
       airport.land(plane);
     }).toThrowError('Stormy weather');
   });

   it('Cannot takeOff if weather is stormy', function() {
     spyOn(weather, 'randomizer').and.returnValue('Stormy')
     expect(function() {
       airport.takeOff(plane);
     }).toThrowError('Stormy weather');
   });

});
