import { Outlet } from "react-router-dom";
import Navbar from "../components/Navabar";

const Root = () => {
    return (
        <div className="sans">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;