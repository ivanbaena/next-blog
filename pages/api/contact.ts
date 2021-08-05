import { MongoClient } from 'mongodb';
import { connectionString } from '../../constants';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // store in db

    const newMessage: any = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    let result;
    try {
      result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Could not insert document.' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Success', data: newMessage });
  }
};
