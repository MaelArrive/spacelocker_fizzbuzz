const request = require('supertest');
const app = require('../app');

describe('FizzBuzz API', () => {
  test('returns correct FizzBuzz sequence for valid input', async () => {
    const response = await request(app)
      .post('/fizzbuzz')
      .send({
        fizz_nb: 3,
        buzz_nb: 5,
        start: 1,
        end: 15,
      });

    expect(response.status).toBe(200);
    expect(response.body.result).toEqual([
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz',
    ]);
  });

  test('returns 400 for non-numeric inputs', async () => {
    const response = await request(app)
      .post('/fizzbuzz')
      .send({
        fizz_nb: 'three',
        buzz_nb: 5,
        start: 1,
        end: 15,
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('All inputs must be numbers.');
  });

  test('returns 400 for invalid range (start > end)', async () => {
    const response = await request(app)
      .post('/fizzbuzz')
      .send({
        fizz_nb: 3,
        buzz_nb: 5,
        start: 10,
        end: 1,
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Start value must be less than or equal to end value.');
  });

  test('returns 404 for non-existent routes', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});
