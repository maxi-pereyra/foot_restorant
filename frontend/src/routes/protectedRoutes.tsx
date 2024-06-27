//import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

//interface protectedRoutesInterface {}

const ProtectedRoutes= () => {
    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
} 

export default ProtectedRoutes;
