import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Users from "./components/users/Users";

function App() {
  return <div>
    <Navigation/>
    <Users/>
    <Outlet/>
  </div>;
}

export default App;
