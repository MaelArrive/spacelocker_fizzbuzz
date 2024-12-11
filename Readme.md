# FizzBuzz Web Application

A simple FizzBuzz API built with Node.js and Express.

## Endpoints

### POST /fizzbuzz
Calculates the FizzBuzz sequence.

**Request Body**:
```json
{
  "fizz_nb": 3,
  "buzz_nb": 5,
  "start": 1,
  "end": 15
}