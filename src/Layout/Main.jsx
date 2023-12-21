import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/Shared/NavBar/NavBar";
import Footer from "../pages/Home/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;