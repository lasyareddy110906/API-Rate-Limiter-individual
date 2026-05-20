import express from "express";
import cors from "cors";

const app = express();

/* ======================================================
   MIDDLEWARE
====================================================== */

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

/* ======================================================
   HOME ROUTE
====================================================== */

app.get("/", (req, res) => {
  res.send("API Rate Limiter Running 🚀");
});

/* ======================================================
   FIXED WINDOW RATE LIMITER
====================================================== */

const fixedWindowStore = {};

app.get("/api/fixed-window", (req, res) => {
  const ip = "demo-user";

  const LIMIT = 5;
  const WINDOW_MS = 60000;

  const currentTime = Date.now();

  // First request
  if (!fixedWindowStore[ip]) {
    fixedWindowStore[ip] = {
      count: 1,
      startTime: currentTime,
    };

    return res.json({
      success: true,
      algorithm: "Fixed Window",
      requestsUsed: 1,
      remaining: LIMIT - 1,
      message: "Request successful",
    });
  }

  const userData = fixedWindowStore[ip];

  const timePassed =
    currentTime - userData.startTime;

  // Reset window
  if (timePassed > WINDOW_MS) {
    fixedWindowStore[ip] = {
      count: 1,
      startTime: currentTime,
    };

    return res.json({
      success: true,
      algorithm: "Fixed Window",
      requestsUsed: 1,
      remaining: LIMIT - 1,
      message:
        "Window reset. Request successful",
    });
  }

  userData.count++;

  // Limit exceeded
  if (userData.count > LIMIT) {
    return res.status(429).json({
      success: false,
      algorithm: "Fixed Window",
      error: "Rate Limit Exceeded",
      limit: LIMIT,
      message:
        "Too many requests. Try again later.",
    });
  }

  res.json({
    success: true,
    algorithm: "Fixed Window",
    requestsUsed: userData.count,
    remaining: LIMIT - userData.count,
    message: "Request successful",
  });
});

/* ======================================================
   SLIDING WINDOW RATE LIMITER
====================================================== */

const slidingWindowStore = {};

app.get("/api/sliding-window", (req, res) => {
  const ip = "demo-user";

  const LIMIT = 5;
  const WINDOW_MS = 60000;

  const currentTime = Date.now();

  if (!slidingWindowStore[ip]) {
    slidingWindowStore[ip] = [];
  }

  // Remove expired timestamps
  slidingWindowStore[ip] =
    slidingWindowStore[ip].filter(
      (timestamp) =>
        currentTime - timestamp < WINDOW_MS
    );

  // Limit exceeded
  if (
    slidingWindowStore[ip].length >= LIMIT
  ) {
    return res.status(429).json({
      success: false,
      algorithm: "Sliding Window",
      error: "Rate Limit Exceeded",
      limit: LIMIT,
      message:
        "Too many requests. Try again later.",
    });
  }

  // Store request
  slidingWindowStore[ip].push(currentTime);

  res.json({
    success: true,
    algorithm: "Sliding Window",
    requestsUsed:
      slidingWindowStore[ip].length,
    remaining:
      LIMIT - slidingWindowStore[ip].length,
    message: "Request successful",
  });
});

/* ======================================================
   TOKEN BUCKET RATE LIMITER
====================================================== */

const tokenBuckets = {};

app.get("/api/token-bucket", (req, res) => {
  const ip = "demo-user";

  const BUCKET_SIZE = 5;
  const REFILL_RATE = 1;
  const REFILL_TIME = 10000;

  const currentTime = Date.now();

  if (!tokenBuckets[ip]) {
    tokenBuckets[ip] = {
      tokens: BUCKET_SIZE,
      lastRefill: currentTime,
    };
  }

  const bucket = tokenBuckets[ip];

  // Calculate refill
  const timePassed =
    currentTime - bucket.lastRefill;

  const refillTokens = Math.floor(
    timePassed / REFILL_TIME
  ) * REFILL_RATE;

  if (refillTokens > 0) {
    bucket.tokens = Math.min(
      BUCKET_SIZE,
      bucket.tokens + refillTokens
    );

    bucket.lastRefill = currentTime;
  }

  // Limit exceeded
  if (bucket.tokens <= 0) {
    return res.status(429).json({
      success: false,
      algorithm: "Token Bucket",
      error: "Bucket Empty",
      limit: BUCKET_SIZE,
      message:
        "Too many requests. Try again later.",
    });
  }

  bucket.tokens--;

  res.json({
    success: true,
    algorithm: "Token Bucket",
    tokensRemaining: bucket.tokens,
    message: "Request successful",
  });
});

/* ======================================================
   LEAKY BUCKET RATE LIMITER
====================================================== */

const leakyBuckets = {};

app.get("/api/leaky-bucket", (req, res) => {
  const ip = "demo-user";

  const BUCKET_SIZE = 5;
  const LEAK_RATE = 1;
  const LEAK_INTERVAL = 10000;

  const currentTime = Date.now();

  if (!leakyBuckets[ip]) {
    leakyBuckets[ip] = {
      water: 0,
      lastLeak: currentTime,
    };
  }

  const bucket = leakyBuckets[ip];

  // Leak calculation
  const timePassed =
    currentTime - bucket.lastLeak;

  const leakedRequests = Math.floor(
    timePassed / LEAK_INTERVAL
  ) * LEAK_RATE;

  if (leakedRequests > 0) {
    bucket.water = Math.max(
      0,
      bucket.water - leakedRequests
    );

    bucket.lastLeak = currentTime;
  }

  // Limit exceeded
  if (bucket.water >= BUCKET_SIZE) {
    return res.status(429).json({
      success: false,
      algorithm: "Leaky Bucket",
      error: "Bucket Overflow",
      limit: BUCKET_SIZE,
      message:
        "Too many requests. Try again later.",
    });
  }

  bucket.water++;

  res.json({
    success: true,
    algorithm: "Leaky Bucket",
    requestsInBucket: bucket.water,
    remaining:
      BUCKET_SIZE - bucket.water,
    message: "Request successful",
  });
});

/* ======================================================
   REDIS DISTRIBUTED LIMITER (SIMULATION)
====================================================== */

const redisLimiterStore = {};

app.get("/api/redis-limiter", (req, res) => {
  const ip = "demo-user";

  const LIMIT = 5;
  const WINDOW_MS = 60000;

  const currentTime = Date.now();

  if (!redisLimiterStore[ip]) {
    redisLimiterStore[ip] = {
      count: 1,
      startTime: currentTime,
    };

    return res.json({
      success: true,
      algorithm: "Redis Limiter",
      requestsUsed: 1,
      remaining: LIMIT - 1,
      message:
        "Distributed request successful",
    });
  }

  const userData = redisLimiterStore[ip];

  const timePassed =
    currentTime - userData.startTime;

  // Reset window
  if (timePassed > WINDOW_MS) {
    redisLimiterStore[ip] = {
      count: 1,
      startTime: currentTime,
    };

    return res.json({
      success: true,
      algorithm: "Redis Limiter",
      requestsUsed: 1,
      remaining: LIMIT - 1,
      message:
        "Distributed limiter reset",
    });
  }

  userData.count++;

  // Limit exceeded
  if (userData.count > LIMIT) {
    return res.status(429).json({
      success: false,
      algorithm: "Redis Limiter",
      error:
        "Distributed Rate Limit Exceeded",
      limit: LIMIT,
      message:
        "Too many distributed requests.",
    });
  }

  res.json({
    success: true,
    algorithm: "Redis Limiter",
    requestsUsed: userData.count,
    remaining: LIMIT - userData.count,
    message:
      "Distributed request successful",
  });
});

/* ======================================================
   SERVER
====================================================== */

const PORT = 9000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});