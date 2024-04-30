import { Outlet } from "react-router-dom";
import Navbar from "../components/Navabar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div className="sans">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;