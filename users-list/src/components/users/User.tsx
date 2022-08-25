import { useNavigate } from "react-router-dom";
import { datahandler } from "../../apis/datahandler";

interface UserProps {
  id: number;
  first_name: string;
  last_name: string;
  created_at: string;
  status: string;
}

const User: React.FC<UserProps> = ({
  id,
  first_name,
  last_name,
  created_at,
  status,
}: UserProps) => {
  const navigate = useNavigate();

  async function updateUserStatus(id: number) {
    const userStatus = status === "locked" ? "active" : "locked";
    const userStatusUpdate = {
      status: userStatus,
    };
    await datahandler.updateUserStatusByItsId(id, userStatusUpdate)
  }

  return (
    <div className="m-4 p-3 border-solid border-2 border-sky-500 rounded-md">
      {status === "locked" ? (
        <h1>
          <s>
            {first_name} {last_name}
          </s>
        </h1>
      ) : (
        <h1>
          {first_name} {last_name}
        </h1>
      )}
      <h1>{status}</h1>
      <span>{created_at} {id}</span>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <input
        type="checkbox"
        checked={status === "locked" ? true : false}
        onChange={() => updateUserStatus(id)}
      />
    </div>
  );
};

export default User;
