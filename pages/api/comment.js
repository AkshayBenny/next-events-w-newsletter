export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = await req.body;

    res.status(201).json({ data: data });
  }
}
