import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { datahandler } from "../../apis/datahandler";


export const EditUser = () => {

    const navigate = useNavigate();

    type User = {
        id: number;
        last_name: string;
        first_name: string;
        status: string;
        created_at: string;
        updated_at: string;
        url: string;
      };

      type userUpdateDetails = {
        first_name: string;
        last_name: string;
      };

    const params = useParams();

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchUserById = async () => {
            return await datahandler.getUserById(params.id as string)
        };
        fetchUserById().then((data) => {
            setUser(data);
        })
    }, [params.id])

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
    <form action="" onSubmit={(event) => updateUser(event)}>
        <label htmlFor="FirstName">First Name</label>
        <input required={true}
          type="text"
          placeholder="first name"
          name="first_name" 
          defaultValue={user?.first_name}/>
          <label htmlFor="LastName">Last Name</label>
        <input required={true}
          type="text"
          placeholder="last name"
          name="last_name" 
          defaultValue={user?.last_name}/>
          <button type="submit">Edit user</button>
    </form>
  )
}
