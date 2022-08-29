import { Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
        <div className=" p-4 flex justify-between container mx-xl  content-center max-w-[70%] m-auto">
          <ul className=" md:flex text-indigo-900 font-bold tracking-tight">
            <li className="pl-7"><Link to={"/"}>Home</Link></li>
            <li className="pl-7"><Link to={"/new"}> Add new User</Link></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navigation