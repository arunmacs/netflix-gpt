import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import appRoutes from "../routes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/slices/userSlice";

function AppWithRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default AppWithRoutes;
