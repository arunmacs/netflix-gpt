import "./App.css";
import { Provider } from "react-redux";
import appStore from "./store";
import AppWithRoutes from "./components/AppWithConfig";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <AppWithRoutes />
      </Provider>
    </div>
  );
}

export default App;
