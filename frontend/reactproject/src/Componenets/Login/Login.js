import React from "react";
import { Link } from "react-router-dom";
import login from "../../93385-login (1).gif";

const Login = () => {
  return (
    <div>
      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                    className="input input-bordered"
                  />
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
