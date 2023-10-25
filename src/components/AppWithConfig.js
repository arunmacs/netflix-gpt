import { RouterProvider } from "react-router-dom";
import appRoutes from "../routes";

function AppWithRoutes() {
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default AppWithRoutes;
