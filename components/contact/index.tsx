import { useState, useEffect } from 'react';
import Notification from '../ui/notification';

const sendContactData = async ({ email, name, message }: any) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({
      email,
      name,
      message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(''); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState(null);
  let notification;

  useEffect(() => {
    if (requestStatus === 'pending' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus('');
        setRequestError(null);
        let notification = null;
      }, 3000);

      return () => clearTimeout();
    }
  }, [requestStatus]);

  const sendMessageHandler = async (e: any) => {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({ email, name, message });
      setRequestStatus('success');
      setEmail('');
      setMessage('');
      setName('');
    } catch (error) {
      setRequestError(error);
      setRequestStatus('error');
    }
  };

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className="bg-gray-400 pb-4 min-h-screen relative">
      <div className="container mx-auto">
        <h1 className="w-full text-center text-4xl font-bold py-4">
          How can I help you?
        </h1>
        <form
          className="bg-gray-200 w-8/12 mx-auto rounded flex flex-wrap p-4"
          onSubmit={sendMessageHandler}
        >
          <div className="w-1/2">
            <div className="flex flex-col ml-4 mr-2">
              <label htmlFor="email" className="font-semibold">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col ml-2 mr-4">
              <label htmlFor="name" className="font-semibold">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex flex-col mx-4 mt-4">
            <label htmlFor="message" className="font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full mx-4 text-right">
            <button
              className="rounded px-4 py-2 border border-black mt-4"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
