import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  const sendMessageHandler = (e: any) => {
    e.preventDefault();
    fetch('/api/contact', {
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
  };

  return (
    <section className="bg-gray-400 pb-4 min-h-screen">
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
    </section>
  );
};

export default ContactForm;
