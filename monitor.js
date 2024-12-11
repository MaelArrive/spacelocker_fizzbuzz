const os = require('os');
const osUtils = require('os-utils');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'warn',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'alerts.log' }),
  ],
});

let cpuAlertCounter = 0;

function monitorSystem(CPU_THRESHOLD, ALERT_DURATION) {
  setInterval(() => {
    osUtils.cpuUsage((cpuUsage) => {
      const cpuPercentage = cpuUsage * 100;

      if (cpuPercentage > CPU_THRESHOLD) {
        cpuAlertCounter++;
        console.warn(`High CPU usage detected: ${cpuPercentage.toFixed(2)}%`);
      } else {
        cpuAlertCounter = 0;
      }

      if (cpuAlertCounter >= ALERT_DURATION) {
        logger.warn({
          message: `CPU usage exceeded ${CPU_THRESHOLD}% for ${ALERT_DURATION} seconds.`,
          cpuUsage: cpuPercentage.toFixed(2),
          timestamp: new Date().toISOString(),
        });
        cpuAlertCounter = 0;
      }
    });
  }, 1000);
}

module.exports = monitorSystem;
