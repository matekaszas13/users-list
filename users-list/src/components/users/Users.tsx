import { useEffect, useState } from "react";
import { datahandler } from "../../apis/datahandler";
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
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      
    </div>
  );
};

export default Users;
