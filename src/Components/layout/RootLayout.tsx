import { Outlet, useLocation } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  const location = useLocation();
  const hideNavbarOnWelcome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar fixed top */}
      {!hideNavbarOnWelcome && <Navbar />}

      {/* Main content */}
      <main className="flex-1 mt-[64px] mb-[64px] overflow-auto p-4 md:p-8  rounded-lg">
        {/* mt-[64px] and mb-[64px] reserve space for fixed navbar and footer */}
        <Outlet />
      </main>

      {/* Footer fixed bottom */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
