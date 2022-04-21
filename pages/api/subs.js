import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const connectDB = async () => {
    const client = await MongoClient.connect(process.env.mongoURL);
    return client;
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

  if (req.method === 'GET') {
    let client;
    try {
      client = await connectDB();
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to DB' });
      return;
    }

    try {
      const commentsArray = await getComment(client);
      res.status(201).json({ myData: commentsArray });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Could no fetch data' });
      return;
    }
  }
}
