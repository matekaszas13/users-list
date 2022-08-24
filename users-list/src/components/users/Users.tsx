import { useEffect, useState } from "react";
import { datahandler } from "../../apis/datahandler";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      return await datahandler.getUsers();
    };
    fetchUsers().then((data) => {
      setUsers(data);
    });
  });

  return <div>Users</div>;
};

export default Users;
