import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const Layout = () => {
  return (
    <div className="font-merriweather">
      <div className="bg-[#AAA081] rounded-bl-xl rounded-br-xl shadow-sm sticky top-0 z-20">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
