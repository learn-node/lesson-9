const redis = require("redis");

const client = redis.createClient({
  url: process.env.REDIS_URL || "redis://redis:6379",
});

async function connectToRedis() {
  try {
    await client.connect();
    console.log("Connected to the Redis server");
  } catch (err) {
    console.error("Redis connection error:", err);
  }
}

connectToRedis();

module.exports = client;
