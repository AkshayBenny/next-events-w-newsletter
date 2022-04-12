import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(MONGO_URL);
  if (req.method === 'POST') {
    const id = req.query.eventId;
    const data = await req.body;
    const userEmail = data.email;
    const userName = data.name;
    const userComment = data.comment;
    const newComment = {
      eventId: id,
      email: userEmail,
      name: userName,
      comment: userComment,
    };

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      res.status(422).json({ message: 'Invalid email address' });
    } else {
      const db = client.db();
      await db.collection('comments').insertOne(newComment);

      res.status(201).json({ myData: newComment });
    }
  }

  if (req.method === 'GET') {
    const db = client.db();
    const commentsArray = await db
      .collection('comments')
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ comments: commentsArray });
  }
  client.close();
}
