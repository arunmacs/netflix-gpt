import { RouterProvider } from "react-router-dom";
import appRoutes from "../routes";
import appStore from "../store";
import { Provider } from "react-redux";

function AppWithConfig() {
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRoutes} />
      </Provider>
    </>
  );
}

export default AppWithConfig;
