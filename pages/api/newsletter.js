import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = await req.body.email;
    if (!email) {
      res.json({ message: 'No email added' });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      res.status(422).json({ message: 'Invalid email address' });
    } else {
      const client = await MongoClient.connect(MONGO_URL);

      const db = client.db();
      await db.collection('emails').insertOne({ email: email });
      client.close();
      res.status(201).json({ email: email });
    }
  } else {
    res.status(200).json({ message: 'Request recieved' });
  }
}
