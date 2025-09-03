import { Outlet, useLocation } from "react-router";
import Navbar from "./navbar/Navbar";

const RootLayout = () => {
  const location = useLocation();

  
  const hideNavbarOnWelcome = location.pathname === "/";

  return (
    <div>
      {!hideNavbarOnWelcome && <Navbar />} 
      <Outlet />
    </div>
  );
};

export default RootLayout;
