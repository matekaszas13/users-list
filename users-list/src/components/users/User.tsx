interface UserProps {
  id: number;
  first_name: string;
  last_name: string;
  created_at: string;
}

const User: React.FC<UserProps> = ({
  id,
  first_name,
  last_name,
  created_at,
}: UserProps) => {
  return (
    <div className="m-4 p-3 border-solid border-2 border-sky-500 rounded-md">
      <h1>{first_name} {last_name}</h1>
      <span>{created_at}</span>
    </div>
  );
};

export default User;
