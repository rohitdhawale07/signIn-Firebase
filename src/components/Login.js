import React, { useState } from "react";
import { auth, provider } from "../firebase.config.js";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const [user, setUser] = useState(null);
  const handleClick = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {!user ? (
        <span>
          Click Here To{" "}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
            onClick={handleClick}
          >
            Sign in
          </button>{" "}
        </span>
      ) : (
        <h1>
          {`Welcome `}
          <span className="text-blue-700 font-bold text-xl">
            {user.displayName}
          </span>{" "}
          <br />
          {` Your Email id is :- `}
          <span className="text-green-700 font-bold">{user.email}</span>
        </h1>
      )}
    </div>
  );
}

export default Login;
