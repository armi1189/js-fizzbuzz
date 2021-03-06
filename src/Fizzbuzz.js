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
  if (this.isDivisibleByThree(num) && this.isDivisibleByFive(num)) return true;
  return false; 
};

Fizzbuzz.prototype.says = function(num) {
  if (this.isDivisibleByFifthteen(num)) return "FizzBuzz";
  if (this.isDivisibleByThree(num)) return "Fizz";
  if (this.isDivisibleByFive(num)) return "Buzz";
  return num;
};
