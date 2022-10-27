import { generateAsync } from "stability-client";

export default async function handler(req, response) {
  const { message } = req.body;
  try {
    const { res, images } = await generateAsync({
      noStore: true,
      prompt: message,
      apiKey: "sk-Sq8vEYtN1aEmOtg9tFZW1cWy88iBlkSsjTzXyswjPmN8uTSh",
    });
    const buffer = images[0].buffer;
    return response.send(buffer);
  } catch (err) {
    return response.status(500).send(err.message || err);
  }
}
