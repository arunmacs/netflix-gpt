import React, { useEffect } from "react";
import NetflixLogo from "../assets/images/Netflix_Logo_PMS.png";
import UserAvatar from "../assets/images/Netflix-avatar.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";

const Header = () => {
  const user = useSelector((state) => state?.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuthHook = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribeAuthHook();
    };
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="absolute z-10 w-full bg-gradient-to-b from-black">
      <img src={NetflixLogo} alt="logo" className="w-52" />
      {user && (
        <div className="z-10 absolute top-6 right-4 flex">
          <img src={UserAvatar} alt="avatar" className="w-10 rounded-md" />
          <button
            type="button"
            onClick={handleLogOut}
            className="text-lg text-white font-medium mx-5"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
