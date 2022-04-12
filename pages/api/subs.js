export async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(MONGO_URL);
    const findResult = await collection.find('email').toArray();
    console.log('Found documents =>', findResult);

    client.close();
    res.status(201).json({ myData: findResult });
  }
}
