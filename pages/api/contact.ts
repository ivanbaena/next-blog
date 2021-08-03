// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {
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

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res.status(201).json({ message: 'Success', data: newMessage });
  }
};
