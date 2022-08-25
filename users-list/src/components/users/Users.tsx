import { useEffect, useState } from "react";
import { datahandler } from "../../apis/datahandler";
import Pagination from "../pagination/Pagination";
import User from "./User";

const Users = () => {
  type User = {
    id: number;
    last_name: string;
    first_name: string;
    status: string;
    created_at: string;
    updated_at: string;
    url: string;
  };

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      return await datahandler.getUsers();
    };
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, [users]);

  return (
    <div className="max-w-[65%] m-auto ">
        {users && <Pagination users={users}/>}
    </div>
    
  );
};

export default Users;
