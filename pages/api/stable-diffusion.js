import { generateAsync } from "stability-client";

export default async function handler(req, response) {
  const { prompt } = req.body;

  try {
    // const { res, images } = await generateAsync({
    //   noStore: true,
    //   prompt: "",
    //   apiKey: process.env.DREAMSTUDIO_API_KEY,
    // });
    // const buffer = images[0].buffer;
    return response.send("");
  } catch (err) {
    return response.status(500).send(err.message || err);
  }
}
