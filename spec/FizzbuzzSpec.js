describe ("Fizzbuzz", function() {

  var fizzbuzz = new Fizzbuzz();

  it("should know if three is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
  });

  it("should know if any number is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(6)).toBe(true)
  });

  it("should know if a number is not divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(4)).toBe(false)
  });

  it("should know if five is divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
  });

  it("should know if any number is divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(20)).toBe(true)
  });

  it("should know if number is not divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(7)).toBe(false)
  });

  it("should know if number is divisible by both 5 and 3", function() {
    expect(fizzbuzz.isDivisibleByFifthteen(15)).toBe(true)
  });

  it("should know if number is not divisible by both 5 and 3", function() {
    expect(fizzbuzz.isDivisibleByFifthteen(19)).toBe(false)
  });
});

