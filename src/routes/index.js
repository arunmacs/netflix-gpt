import { createBrowserRouter } from "react-router-dom";
import Browse from "../components/Browse";
import Login from "../components/Login";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
];

const appRoutes = createBrowserRouter(routes);

export default appRoutes;
