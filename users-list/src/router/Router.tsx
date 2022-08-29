import { Routes, Route} from "react-router-dom";
import App from "../App";
import { EditUser } from "../components/editUser/EditUser";
import NewUser from "../components/newUser/NewUser";
import Users from "../components/users/Users";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Users />} />
        <Route path="/new" element={<NewUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>} />
      </Route>

    </Routes>
  );
};

export default Router;
