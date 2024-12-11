# FizzBuzz Web Application with Monitoring

A simple FizzBuzz API built with Node.js and Express, with a lightweight monitoring solution that tracks CPU and memory usage. The application logs warnings when CPU usage exceeds 90% for 60 seconds or when memory usage is high.

## Features:
- **FizzBuzz API**: Accepts a range and returns a FizzBuzz sequence.
- **CPU Monitoring**: Logs a warning if CPU usage exceeds 90% for a minute.
- **Memory Monitoring**: Logs a warning if memory usage exceeds 80%.
- **Logging**: Alerts are logged to `cpu-usage.log` when the threshold is exceeded.
  
---

## 1. Prerequisites

Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager, comes with Node.js)

---

## 2. Clone the Repository

Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/fizzbuzz-app.git
cd fizzbuzz-app
```

## 3. Install Dependencies

After cloning the repository, install the required dependencies:
```bash
npm install
```
This will install all the dependencies specified in `package.json`, including the necessary packages for the FizzBuzz API, monitoring, and logging.

## 4. Run the Application Locally

To start the application in development mode, run:
```bash
npm run dev
```
This will start the server using `nodemon`, which will automatically restart the server when code changes are detected.
By default, the server runs on port `3000`. You can visit the API at:
```bash
http://localhost:3000
```

## 5. FizzBuzz API

- URL: `POST /fizzbuzz`
- Body: 
```json
{
  "fizz_nb": 3,
  "buzz_nb": 5,
  "start": 1,
  "end": 15
}
```
- Response:
```json
{
  "result": [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
}

```

## 6. Monitoring

### CPU Monitoring

The application monitors the CPU usage. If CPU usage exceeds 90% for 60 seconds, a warning will be logged:

`If CPU usage exceeds 90% for 60 seconds.`

You can configure the threshold and timing in the `app.js` file, line `11`:

```js
const CPU_THRESHOLD = 90;
const ALERT_DURATION = 60;
```

### Log File
All logs will be stored in the `alerts.log` file located in the root directory.
You can open this file to see the logged warnings when CPU usage exceeds the threshold.

## 7. Running Tests

To run tests for the application:

Run the tests using:
```bash
npm test
```
The tests will verify the FizzBuzz logic.

## 8. Docker

If you'd like to containerize the application using Docker, you can follow these steps:

### a. Create Docker Image

First, make sure your project includes a `Dockerfile`. Here’s a simple `Dockerfile` for this `Node.js` app:

```Dockerfile
# Dockerfile
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Then build and run the Docker container:
```bash
docker build -t fizzbuzz-app .
docker run -p 3000:3000 fizzbuzz-app
```
Now, your app will be available at `http://localhost:3000` in your browser.

