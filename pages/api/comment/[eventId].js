import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const connectDB = async () => {
    const client = await MongoClient.connect(mongoURL);
    return client;
  };

  const insertDocument = async (client, document) => {
    const db = client.db();
    await db.collection('comments').insertOne(document);
  };

  const getComment = async (client) => {
    const db = client.db();
    const commentsArray = await db
      .collection('comments')
      .find()
      .sort({ _id: -1 })
      .toArray();

    return commentsArray;
  };

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
      return;
    } else {
      let client;
      try {
        client = await connectDB();
      } catch (error) {
        res.status(500).json({ message: 'Connecting to database failed' });
        return;
      }

      try {
        await insertDocument(client, newComment);
      } catch (error) {
        res.status(500).json({ message: 'Adding data to DB failed' });
        return;
      }

      res.status(201).json({ myData: newComment });
    }
  }

  if (req.method === 'GET') {
    let client;

    try {
      client = await connectDB();
    } catch (error) {
      res.status(500).json({ message: 'Conneting to DB failed...' });
      return;
    }

    try {
      const commentsArray = await getComment(client);
      res.status(200).json({ comments: commentsArray });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Error couldn't fetch comments" });
      return;
    }
  }
}
