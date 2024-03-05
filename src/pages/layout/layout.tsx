import { Footer, Navbar } from "@/components/layout";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow mb-8"><Outlet /></main>
      <Footer />
    </div>
  );
};

export default Layout;
