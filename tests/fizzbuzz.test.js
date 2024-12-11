const generateFizzBuzz = require('../fizzbuzz');

describe('FizzBuzz Logic', () => {
  test('returns numbers for non-multiples of fizz and buzz', () => {
    const result = generateFizzBuzz(3, 5, 1, 2);
    expect(result).toEqual([1, 2]);
  });

  test('returns "Fizz" for multiples of fizz_nb only', () => {
    const result = generateFizzBuzz(3, 5, 3, 3);
    expect(result).toEqual(['Fizz']);
  });

  test('returns "Buzz" for multiples of buzz_nb only', () => {
    const result = generateFizzBuzz(3, 5, 5, 5);
    expect(result).toEqual(['Buzz']);
  });

  test('returns "FizzBuzz" for multiples of both fizz_nb and buzz_nb', () => {
    const result = generateFizzBuzz(3, 5, 15, 15);
    expect(result).toEqual(['FizzBuzz']);
  });

  test('throws an error if start > end', () => {
    expect(() => generateFizzBuzz(3, 5, 10, 1)).toThrow(
      'Start value must be less than or equal to end value.'
    );
  });

  test('handles a range of numbers correctly', () => {
    const result = generateFizzBuzz(3, 5, 1, 15);
    expect(result).toEqual([
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz',
    ]);
  });
});
