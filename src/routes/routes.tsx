

import { createBrowserRouter } from "react-router";
import WelcomePage from "../pages/welcomePage/WelcomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage></WelcomePage>
  }
]);