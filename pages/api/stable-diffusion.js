import { generateAsync } from "stability-client";
import rateLimit from "express-rate-limit";
// import { limiter, runMiddleware } from "utils/utils";

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const getIP = (request) =>
  request.ip ||
  request.headers["x-forwarded-for"] ||
  request.headers["x-real-ip"] ||
  request.connection.remoteAddress;

const limiter = rateLimit({
  keyGenerator: getIP,
  windowMs: 24 * 24 * 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  skipFailedRequests: true,
  message: "We've reached our limit for now, please come back later",
});

export default async function handler(req, response) {
  const { prompt } = req.body;
  try {
    await runMiddleware(req, response, limiter);
  } catch (err) {
    return response.status(429).send(err.message);
  }
  try {
    const { res, images } = await generateAsync({
      noStore: true,
      prompt: prompt,
      apiKey: process.env.DREAMSTUDIO_API_KEY,
    });
    const buffer = images[0].buffer;
    return response.send(buffer);
  } catch (err) {
    return response.status(500).send(err.message || err);
  }
}
