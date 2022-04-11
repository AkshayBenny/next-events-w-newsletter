// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from 'path';
import fs from 'fs';

// const extractDataFromFile = async (path) => {
//   return JSON.parse(fs.readFileSync(path, 'utf-8'));
// };

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // const path = await path.join(process.cwd(), 'data.json');
    const email = await req.body.email;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      res.status(422).json({ message: 'Invalid email address' });

      // const data = await extractDataFromFile(path);
      // const newData = {
      //   email: email,
      // };
      // data.push(newData);
      // fs.writeFileSync(path, JSON.stringify(data));

      res.status(201).json({ email: email });
    }
  } else {
    res.status(200).json({ message: 'Request recieved' });
  }
}
