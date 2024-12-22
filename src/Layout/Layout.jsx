import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
