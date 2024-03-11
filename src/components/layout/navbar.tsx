import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container py-4">
      <div className="h-10 py-4 md:flex flex-row justify-between w-full items-center hidden">
        <div className="flex flex-row items-center justify-center gap-x-16 font-mulish font-bold text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex items-center font-mulish font-bold text-3xl">
          <Link to="/">Logo.</Link>
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