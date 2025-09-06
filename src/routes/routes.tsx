import { createBrowserRouter } from "react-router";
import Login from "../pages/Auth/Login";
import RootLayout from "../Components/layout/RootLayout";
import WelcomePage from "../pages/WelcomePage/welcomePage";
import ChooseYear from "../pages/chooseYear/ChooseYear";

export const router = createBrowserRouter([
  {
    path: "/", // Welcome Page alada route
    element: <WelcomePage />,
  },
  {
    path: "/", // baki route gulo RootLayout use korbe
    element: <RootLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "choose-year",
        element: <ChooseYear />,
      },
    ],
  },
]);
