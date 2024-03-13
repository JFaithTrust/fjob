import { Link } from "react-router-dom";
import {darkLogo} from "@/assets";
const Navbar = () => {
  return (
    <div className="container py-4">
      <div className="h-10 py-4 md:flex flex-row justify-between w-full items-center hidden">
        <div className="flex flex-row items-center justify-center gap-x-16 font-mulish font-bold text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="font-mulish">
          <Link to="/" className={"flex gap-x-2 items-center"}>
            <img src={darkLogo} alt="" className={"w-10 h-10"} />
            <span className="text-black text-4xl font-roboto font-bold">
            <span className="text-darkblue">UZ</span>WORKS
          </span>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-16 font-mulish font-bold text-lg">
          <Link to="/jobs">Jobs</Link>
          <Link to="/workers">Workers</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;