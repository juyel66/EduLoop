import { Outlet, useLocation } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  const location = useLocation();
  const hideNavbarOnWelcome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col text-white overflow-hidden">
      {/* Navbar */}
      {!hideNavbarOnWelcome && <Navbar />}

      {/* Main Content with background image */}
      <main
        className="flex-1 mt-2 ml-2 mb-2 mr-2 p-4 md:p-8 rounded-lg"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-5rem)] rounded-lg">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default RootLayout;
