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
    await datahandler.updateUserStatusByItsId(id, userStatusUpdate);
  }

  return (
    <div className="m-4 p-3 border-solid border-2 border-sky-500 rounded-md w-80 h-32">
      <div className="flex justify-center pb-4">
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
      </div>

      {/* <h1>{status}</h1> */}
      <div className="flex flex-col ">
        <div className="pb-2 flex justify-center">
          <span>{created_at}</span>
        </div>
        <div className="flex justify-center flex-row ">
          <button className="pr-8" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
          <input
            type="checkbox"
            checked={status === "locked" ? true : false}
            onChange={() => updateUserStatus(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
