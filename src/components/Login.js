import React, { useState } from "react";
import Header from "./Header";
import BgAlphaImage from "../assets/images/IN-perspective_alpha_website_large.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BgAlphaImage} alt="alpha-img" />
      </div>
      <form className="absolute top-1/4 left-1/3 w-4/12 px-14 py-16 text-white rounded-md bg-black bg-opacity-[0.86]">
        <h1 className="text-3xl font-medium mb-6">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        <div className="flex flex-col">
          {!isSignInForm && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="my-2 px-3 py-2 rounded h-12 bg-gray-700"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="my-2 px-3 py-2 rounded h-12 bg-gray-700"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="my-2 px-3 py-2 rounded h-12 bg-gray-700"
          />
          <button
            type="submit"
            className="bg-red-600 mt-8 mb-2 py-3 rounded font-medium"
            onClick={(ev) => ev?.preventDefault()}
          >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          {isSignInForm && (
            <div className="flex justify-between content-center">
              <div className="flex content-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="mx-1"
                  placeholder="rememberMe"
                />
                <label htmlFor="rememberMe" className="text-gray-500">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-gray-500">
                Need help?
              </button>
            </div>
          )}
        </div>
        <div className="my-12">
          <p type="button" className="text-gray-500">
            {isSignInForm ? "New to Netflix" : "Already registered"}?{"  "}
            <button
              type="button"
              onClick={toggleSignInForm}
              className="text-white"
            >
              {isSignInForm ? "Sign up now" : "Sign in now"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
