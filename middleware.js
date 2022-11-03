import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(6, "2 m"),
});

export default async function middleware(request, event) {
  const ip = "127.0.2.1";
  console.log("ip", ip);
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    `mw_${ip}`
  );
  console.log(success, limit, reset, remaining);
  event.waitUntil(pending);

  const res = success
    ? NextResponse.next(request)
    : NextResponse.rewrite(new URL("/api/blocked", request.url), request);

  res.headers.set("X-RateLimit-Limit", limit.toString());
  res.headers.set("X-RateLimit-Remaining", remaining.toString());
  res.headers.set("X-RateLimit-Reset", reset.toString());
  return res;
}

export const config = {
  matcher: "/api/stable-diffusion",
};
