import { useNavigate } from "react-router-dom";
import { datahandler } from "../../apis/datahandler";

const NewUser = () => {

    const navigate = useNavigate();

    type newUser = {
        first_name:string;
        last_name:string;
        status:string;
    }

    async function createNewUser(event: any){
        const newUser: newUser = {
            "first_name":event.target["first_name"].value,
            "last_name":event.target["last_name"].value,
            "status":"active"
        }
        await datahandler.createNewUser(newUser);
        navigate("../", {replace: true});
    }

  return (
    <div>
      <form action="" onSubmit={(event) => createNewUser(event)}>
        <input required={true} type="text" placeholder="first name" name="first_name" />
        <input required={true} type="text" placeholder="last name" name="last_name" />
        <button type="submit">Add new user</button>
      </form>
    </div>
  );
};

export default NewUser;
