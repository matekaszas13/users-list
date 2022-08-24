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
    <div>
      <span>{id}</span>
      <span>{first_name}</span>
      <span>{last_name}</span>
      <span>{created_at}</span>
    </div>
  );
};

export default User;
