import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { datahandler } from "../../apis/datahandler";
import { IUser } from "../../globals/models";

export const EditUser = () => {
  const navigate = useNavigate();

  type userUpdateDetails = {
    first_name: string;
    last_name: string;
  };

  const params = useParams();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const fetchUserById = async () => {
      return await datahandler.getUserById(params.id as string);
    };
    fetchUserById().then((data) => {
      setUser(data);
    });
  }, [params.id]);

  async function updateUser(event: any) {
    event.preventDefault();
    const userUpdateDetails: userUpdateDetails = {
      first_name: event.target["first_name"].value,
      last_name: event.target["last_name"].value,
    };
    await datahandler.updateUserByItsId(params.id as string, userUpdateDetails);
    navigate("../", { replace: true });
  }

  return (
    <div className="flex m-2 md:justify-center border-4 border-blue-500 rounded md:w-fit md:m-auto p-5">
      <form action="" onSubmit={(event) => updateUser(event)}>
        <h1 className="flex justify-center text-blue-800 text-[1.6rem]">
          Update User
        </h1>
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-col">
            <label className="text-blue-800" htmlFor="FirstName">
              First Name
            </label>
            <input
              className="p-3 mr-4 border border-blue-500 rounded"
              required={true}
              type="text"
              placeholder="first name"
              name="first_name"
              defaultValue={user?.first_name}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-800" htmlFor="LastName">
              Last Name
            </label>
            <input
              className="p-3 mr-4 border border-blue-500 rounded"
              required={true}
              type="text"
              placeholder="last name"
              name="last_name"
              defaultValue={user?.last_name}
            />
          </div>
        </div>

        <button
          className="mt-2 mr-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          type="submit"
        >
          Edit user
        </button>
      </form>
    </div>
  );
};
