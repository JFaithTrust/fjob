import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {Footer, HeaderMobile, Navbar} from "@/components/layout";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className={"min-h-screen w-full flex flex-col"}>
        <HeaderMobile/>
        <Navbar/>
        <App/>
        <Footer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
