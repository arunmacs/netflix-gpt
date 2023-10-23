import React, { useState, useRef } from "react";
import Header from "./Header";
import BgAlphaImage from "../assets/images/IN-perspective_alpha_website_large.jpg";
import { validateFormData } from "../utils/validations";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const errorMessage = validateFormData(email, password);
    setErrorMessage(errorMessage);

    // submit form data after validations
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BgAlphaImage} alt="alpha-img" />
      </div>
      <form
        onSubmit={(ev) => ev.preventDefault()}
        className="absolute top-1/4 left-1/3 w-4/12 px-14 py-16 text-white rounded-md bg-black bg-opacity-[0.86]"
      >
        <h1 className="text-3xl font-medium mb-6">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        <div className="flex flex-col">
          {!isSignInForm && (
            <input
              ref={fullNameRef}
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="my-2 px-3 py-2 rounded h-12 bg-gray-700"
            />
          )}
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email Address"
            className="my-2 px-3 py-2 rounded h-12 bg-gray-700"
          />
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            className="my-2 px-3 py-2 rounded h-12 bg-gray-700"
          />
          <span className="text-red-600 text-md mx-1">{errorMessage}</span>
          <button
            type="submit"
            className="bg-red-600 mt-8 mb-2 py-3 rounded font-medium"
            onClick={handleFormSubmit}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
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
