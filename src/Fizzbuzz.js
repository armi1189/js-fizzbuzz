function Fizzbuzz() {
};

Fizzbuzz.prototype.isDivisibleByThree = function(num) {
  if (num % 3 === 0) return true;
  return false;
};

Fizzbuzz.prototype.isDivisibleByFive = function(num) {
  if (num % 5 === 0) return true;
  return false;
};

Fizzbuzz.prototype.isDivisibleByFifthteen = function(num) {
  return true;
};

