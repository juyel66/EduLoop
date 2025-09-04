import { Outlet, useLocation } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  const location = useLocation();
  const hideNavbarOnWelcome = location.pathname === "/";

  return (
    <div
      className="min-h-screen  flex flex-col bg-cover bg-center text-white rounded-t-3xl overflow-hidden"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Navbar */}
      {!hideNavbarOnWelcome && <Navbar />}

      {/* Page Content */}
      <div className="flex-grow">
        <Outlet />
       { !hideNavbarOnWelcome &&<Footer />}
      </div>
    </div>
  );
};

export default RootLayout;
