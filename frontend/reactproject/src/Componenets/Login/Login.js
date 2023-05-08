import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../93385-login (1).gif";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { handleLogin1 } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin1(email, password);
    navigate(from, { replace: true });
    const currentUser = {
      email: email
    };
    fetch("https://backend-rudrarahul77-gmailcom.vercel.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(currentUser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
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
                  <label className="label">
                    New to Genius Car?
                    <Link
                      to="/signup"
                      className=" text-bold  label-text-alt link link-hover"
                    >
                      Sign Up?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    <h1>Login</h1>
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up</h1>
              <img src={login} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
