import { Link } from "react-router-dom";
import {darkLogo} from "@/assets";
const Navbar = () => {
  return (
    <div className="container py-4">
      <div className="h-10 py-4 md:flex flex-row justify-between w-full items-center hidden">
        <div className="lg:hidden block font-mulish">
          <Link to="/" className={"flex gap-x-2 items-center"}>
            <img src={darkLogo} alt="" className={"w-10 h-10"}/>
            <span className="text-black text-4xl font-roboto font-bold">
            <span className="text-darkblue">UZ</span>WORKS
          </span>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center lg:gap-x-16 gap-x-8 font-mulish font-bold text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">Biz haqimizda</Link>
          <Link to="/contact">Aloqa</Link>
        </div>
        <div className="lg:block hidden font-mulish">
          <Link to="/" className={"flex gap-x-2 items-center"}>
            <img src={darkLogo} alt="" className={"w-10 h-10"}/>
            <span className="text-black text-4xl font-roboto font-bold">
            <span className="text-darkblue">UZ</span>WORKS
          </span>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center lg:gap-x-16 gap-x-8 font-mulish font-bold text-lg">
          <Link to="/jobs">Ishlar</Link>
          <Link to="/workers">Ishchilar</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;