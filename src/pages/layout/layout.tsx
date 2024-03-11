import {Footer, HeaderMobile, Navbar} from "@/components/layout";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <HeaderMobile/>
            <Navbar />
            <main className="flex-grow"><Outlet/></main>
            <Footer/>
        </div>
    );
};

export default Layout;
