import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;