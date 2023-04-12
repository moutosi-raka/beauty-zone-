import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import Header from "../Shared/Header/Header";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  useTitle('Register');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/login';
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        if(user)
        {
          navigate(from, {replace: true});
        }
      })
      .catch((error) => console.error("error", error));
   
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((res) => console.log('update'))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Header></Header>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl text-white mx-auto my-20 pink-gradient shadow-2xl">
        <h1 className="text-2xl font-bold text-center ">Sign Up</h1>
        <form
          onSubmit={handleSignUp}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full text-black px-4 py-3 rounded-md"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Your Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Your PhotoURL"
              className="w-full text-black px-4 py-3 rounded-md"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full text-black px-4 py-3 rounded-md"
              required
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
              required
            />
            <div className="flex justify-end text-xs text-white"></div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm  bg-pink-500">
            Sing Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-base-100"></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-base-100"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <GoogleSignIn></GoogleSignIn>
        </div>
        <p className="text-sm text-center sm:px-6 ">
          Already have a account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline text-pink-900 font-bold ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
