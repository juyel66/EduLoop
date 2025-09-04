import { createBrowserRouter } from "react-router";
import Login from "../pages/Auth/Login";
import RootLayout from "../Components/layout/RootLayout";
import WelcomePage from "../pages/WelcomePage/welcomePage";
import ChooseYear from "../pages/chooseYear/ChooseYear";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/", 
        element: <WelcomePage />,
      },
      {
        path: "/login", 
        element: <Login />,
      },
      {
        path: "choose-year",
        element: <ChooseYear />
      }
      
    ],
  },
]);
