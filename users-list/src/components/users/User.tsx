import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { datahandler } from "../../apis/datahandler";
import { IUser } from "../../globals/models";

interface UserProps {
  user: IUser;
}

const User: React.FC<UserProps> = ({
  user: { id, first_name, last_name, created_at, status },
}: UserProps) => {
  const navigate = useNavigate();

  const [userStatus, setUserStatus] = useState<string>(status);

  async function updateUserStatus(id: number) {
    const status = userStatus === "locked" ? "active" : "locked";
    const userStatusUpdate = {
      status: status,
    };
    try {
      await datahandler.updateUserStatusByItsId(id, userStatusUpdate);
      setUserStatus(status);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="m-4 p-3 border-solid border-2 border-sky-500 rounded-md md:w-80 md:h-32">
      <div className="flex flex-row justify-center pb-4">
        {userStatus === "locked" ? (
          <h1 className="truncate">
            <s className="flex flex-row ">
              {first_name} {last_name}
            </s>
          </h1>
        ) : (
          <h1 className="flex flex-row truncate">
            <span className="mr-1">{first_name} </span>
            <span>{last_name}</span>
          </h1>
        )}
      </div>
      <div className="flex flex-col ">
        <div className="pb-2 flex justify-center">
          <span>{created_at}</span>
        </div>
        <div className="flex justify-center flex-row ">
          <button
            className="mr-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit
          </button>
          <input
            type="checkbox"
            checked={userStatus === "locked"}
            onChange={() => updateUserStatus(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
