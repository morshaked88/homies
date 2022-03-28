import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login() {
  const history = useHistory();
  const { firbase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "login - HOMIES";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="phones with logo"
          className="max-w-full"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="fle justify-center w-full">
          <img src="/images/logo.png" alt="logo" className="mt-2 w-6/12 mb-5" />
        </h1>

        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

        <form onSubmit={handleLogin} method="POST">
          <input
            type="text"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            placeholder="Email address"
            aria-label="Enter your email address"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            placeholder="Password"
            aria-label="Enter your password"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}
