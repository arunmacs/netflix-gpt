import React from "react";
import { RouterProvider } from "react-router-dom";
import appRoutes from "../routes";

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default Body;
