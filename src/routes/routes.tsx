import { createBrowserRouter } from "react-router";
import Login from "../pages/Auth/Login";
import RootLayout from "../Components/layout/RootLayout";
import WelcomePage from "../pages/WelcomePage/welcomePage";
import ChooseYear from "../pages/chooseYear/ChooseYear";
import Subject from "../pages/Subject/Subject";

export const router = createBrowserRouter([
  {
    path: "/", 
    element: <WelcomePage />,
  },
  {
    path: "/", 
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
      {
        path: "subject",
        element: <Subject />,
      },
    ],
  },
]);
