interface messageType {
  message: string;
  isHidden: boolean;
}

const ErrorMessage: React.FC<messageType> = ({ message, isHidden }) => {
  return (
    <div
      className="mr-3 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4  w-64 h-20"
      role="alert"
      hidden={isHidden}
    >
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
