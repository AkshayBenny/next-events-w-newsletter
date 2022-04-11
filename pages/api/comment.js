export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = await req.body;
    const userEmail = data.email;
    const userName = data.name;
    const userComment = data.comment;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      res.status(422).json({ message: 'Invalid email address' });
    } 


    res.status(201).json({ email: userEmail });
  }
}
