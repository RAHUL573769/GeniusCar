import React, { useContext, useState } from "react";

import signup from "../../107800-login-leady.gif";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { auth, createUser, signItWithGoogle } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const { error, setError } = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        saveData(name, user.email)
          .then((res) => res.json())
          .then((data) => console.log(data));
        alert("User Created");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("User Exists..Please Login");
        // ..
      });
  };

  const googleSignUp = (e) => {
    e.preventDefault();
    // console.log();

    signItWithGoogle(auth, provider)
      .then((result) => {
        const user = result.user;

        navigate("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // ...
      });
  };

  const saveData = (name, email) => {
    const data = {
      name: name,
      email: email
    };
    const url = "https://backend-rudrarahul77-gmailcom.vercel.app/usersdata";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <p className="text-red-600">{error}</p>
                <label className="label">
                  Already Have an Account?
                  <Link
                    to="/login"
                    className=" text-bold  label-text-alt link link-hover"
                  >
                    Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  <h1>Login</h1>
                </button>
                <div className="divider">OR</div>
                <button onClick={googleSignUp} className="btn btn-primary">
                  Continue With Google
                </button>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <img src={signup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
