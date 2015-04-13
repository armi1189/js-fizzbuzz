describe ("Fizzbuzz", function() {
  var fizbuzz = new Fizzbuzz();
  it("should know if a number is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
  });
});

