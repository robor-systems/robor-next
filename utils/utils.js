import rateLimit from "express-rate-limit";

export const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

export function runMiddleware(req, res, fn) {
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

export const limiter = rateLimit({
  keyGenerator: getIP,
  windowMs: 24 * 24 * 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  skipFailedRequests: true,
  message: "We've reached our limit for now, please come back later",
});
