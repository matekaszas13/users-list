import { useNavigate } from "react-router-dom";
import { datahandler } from "../../apis/datahandler";

const NewUser = () => {
  let navigate = useNavigate();

  type newUser = {
    first_name: string;
    last_name: string;
    status: string;
  };

  async function createNewUser(event: any) {
    event.preventDefault();
    const newUser: newUser = {
      first_name: event.target["first_name"].value,
      last_name: event.target["last_name"].value,
      status: "active",
    };
    await datahandler.createNewUser(newUser);
    navigate("../", { replace: true });
  }

  return (
    <div className="flex justify-center border-4 border-blue-500 rounded md:w-fit md:m-auto p-5 m-2">
      <form action="" onSubmit={(event) => createNewUser(event)}>
        <h1 className="flex justify-center text-blue-800  text-[1.6rem]">Create New User</h1>
        <div className="flex flex-col md:flex-row m-4 ">
          <input
            className="p-3 w-72 h-12 mb-2 mr-4 border border-blue-500 rounded"
            required={true}
            type="text"
            placeholder="first name"
            name="first_name"
          />
          <input
            className="p-3 w-72 h-12 border border-blue-500 rounded"
            required={true}
            type="text"
            placeholder="last name"
            name="last_name"
          />
        </div>

        <button
          className="ml-4 mr-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          type="submit"
        >
          Add new user
        </button>
      </form>
    </div>
  );
};

export default NewUser;
