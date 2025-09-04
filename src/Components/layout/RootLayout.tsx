import { Outlet, useLocation } from "react-router";
import Navbar from "./navbar/Navbar";

const RootLayout = () => {
  const location = useLocation();

  
  const hideNavbarOnWelcome = location.pathname === "/";

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Navbar */}
      {!hideNavbarOnWelcome && <Navbar />}

      {/* Page Content */}
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
