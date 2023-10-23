import React from "react";
import NetflixLogo from "../assets/images/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute z-10 w-full bg-gradient-to-b from-black">
      <img src={NetflixLogo} alt="logo" className="w-52" />
    </div>
  );
};

export default Header;
