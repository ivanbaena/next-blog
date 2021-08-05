import ReactDOM from 'react-dom';

const Notification = ({ title, message, status }: any) => {
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'bg-green-900';
  }

  if (status === 'error') {
    statusClasses = 'bg-red-900';
  }

  return ReactDOM.createPortal(
    <div
      className={`rounded w-1/4 absolute left-4 bottom-10 p-2 z-10 ${statusClasses} text-white`}
    >
      <h2 className="font-semibold text-xl text-center">{title}</h2>
      <p className="text-center">{message}</p>
    </div>,
    document?.querySelector('#notification') as any,
  );
};

export default Notification;
