

import { createBrowserRouter } from "react-router";
import WelcomePage from "../pages/WelcomePage/welcomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage></WelcomePage>
  }
]);