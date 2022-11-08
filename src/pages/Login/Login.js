import React from 'react';
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Login = () => {

    const handleLogin = event =>{

    }
    return (
        <div>
        <Header></Header>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl text-white mx-auto my-20 pink-gradient shadow-2xl">
        <h1 className="text-2xl font-bold text-center ">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block  ">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-black rounded-md"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block \">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400"
            />
            <div className="flex justify-end text-xs text-white">
            </div>
          </div>
          <button   className="block w-full p-3 text-center rounded-sm  bg-pink-500">
            Log in
          </button>
        </form >
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-base-100"></div>
          <p className="px-3 text-sm ">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-base-100"></div>
        </div>
        <div className="flex justify-center space-x-4">
        <GoogleSignIn></GoogleSignIn>
        </div>
        <p className="text-sm text-center sm:px-6 ">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/register"
            className="underline text-pink-900 font-bold ml-2"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Login;