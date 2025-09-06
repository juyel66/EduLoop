import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";

import { router } from "./routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      className="min-h-screen bg-white  "
      // style={{ backgroundImage: "url('/images/welcomePage.png')" }}
      
    >
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
