describe ('Weather', function() {
  var weather;

    beforeEach(function() {
      weather = new Weather();
    });

  it('selects random weather', function() {
    expect(weather.randweather).toContain(weather.randomizer())

  })

});
