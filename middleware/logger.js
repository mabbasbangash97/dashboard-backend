const { performance } = require('perf_hooks');

const logger = (req, res, next) => {
  const requestTime = new Date().toISOString();
  const start = performance.now();

  res.on('finish', () => {
    const duration = performance.now() - start;
    console.log(`[${requestTime}] ${req.method} ${req.url} - ${duration.toFixed(2)} ms`); // Log the request time, method, URL, and response time
  });

  next();
};

module.exports = logger;