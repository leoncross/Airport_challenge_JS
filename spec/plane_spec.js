
describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('Creates a plane with a isLanded plane', function() {
    expect(plane.isLanded).toEqual(true)

  });


});
