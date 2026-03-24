export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, email, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // TODO: Connect to an email service (e.g. Resend) or database
  // Example with Resend:
  // const response = await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //   },
  //   body: JSON.stringify({
  //     from: "noreply@robor.systems",
  //     to: "m.ahmed@robor.systems",
  //     subject: `Contact Form: ${subject}`,
  //     html: `<p><strong>From:</strong> ${fullName} (${email})</p><p>${message}</p>`,
  //   }),
  // });
  // if (!response.ok) {
  //   return res.status(500).json({ error: "Failed to send message" });
  // }

  return res.status(200).json({ success: true });
}
