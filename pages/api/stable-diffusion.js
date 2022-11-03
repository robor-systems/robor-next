import { generateAsync } from "stability-client";
import { ratelimit } from "utils/utils";

export default async function handler(req, response) {
  const { prompt } = req.body;

  const ip =
    req.ip ||
    req.headers["x-forwarded-for"] ||
    req.headers["x-real-ip"] ||
    req.connection.remoteAddress ||
    "127.0.0.1";

  const { success, limit, reset, remaining } = await ratelimit.limit(
    `mw_${ip}`
  );

  console.log("reset", reset);
  if (success) {
    response.setHeader("X-RateLimit-Limit", limit.toString());
    response.setHeader("X-RateLimit-Remaining", remaining.toString());
    response.setHeader("X-RateLimit-Reset", reset.toString());
  } else if (!success) {
    return response
      .status(429)
      .send("We've reached our limit for now, please come back later.");
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
