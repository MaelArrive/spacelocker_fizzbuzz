function generateFizzBuzz(fizz_nb, buzz_nb, start, end) {
    if (start > end) {
      throw new Error("Start value must be less than or equal to end value.");
    }
  
    const result = [];
    for (let i = start; i <= end; i++) {
      if (i % fizz_nb === 0 && i % buzz_nb === 0) {
        result.push("FizzBuzz");
      } else if (i % fizz_nb === 0) {
        result.push("Fizz");
      } else if (i % buzz_nb === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
  
    return result;
  }
  
  module.exports = generateFizzBuzz;
  