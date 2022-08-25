import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/new"}> Add new User</Link>
        </div>
    </nav>
  )
}

export default Navigation