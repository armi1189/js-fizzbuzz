describe ("Fizzbuzz", function() {

  var fizzbuzz = new Fizzbuzz();

  it("should know if three is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
  });

  it("should know if six is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(6)).toBe(true)
  });

  it("should know if a number is not divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(4)).toBe(false)
  });

  it("should know if a number is divisible by six", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
  });

});

