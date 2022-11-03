export default function handler(_req, res) {
  return res
    .status(429)
    .send("We've reached our limit for now, please come back later.");
}
