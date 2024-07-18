import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

const AuthForms = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { handleSubmit, control, formState: { errors } } = useForm();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <img
        className="w-full h-full object-cover absolute inset-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="banner"
      />
      <div className="relative bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto z-10">
        {isSignUp ? (
          <div>
            <h2 className="text-2xl text-white font-bold mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                  UserName
                </label>
                <Controller
                  name="username"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      className="shadow appearance-none border rounded w-full  px-3 text-white bg-neutral-700 border-none py-4 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="UserName"
                      required
                    />
                  )}
                />
                {errors.username && <span className="text-red-500">Username is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      className="shadow appearance-none border rounded w-full text-white bg-neutral-700 border-none py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  )}
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      className="shadow appearance-none border rounded w-full text-white bg-neutral-700 border-none py-4 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                      required
                    />
                  )}
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              <div className="flex items-center justify-between">
                <NavLink
                  to="/browse"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign Up
                </NavLink>
                <button
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={toggleForm}
                >
                  Already have an account? Sign In
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl text-white font-bold mb-6">Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      className="shadow appearance-none border rounded w-full  px-3 text-white bg-neutral-700 border-none py-4 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  )}
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      className="shadow appearance-none border rounded w-full px-3 text-white bg-neutral-700 border-none py-4 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                      required
                    />
                  )}
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              <div className="flex items-center justify-between">
                <NavLink
                  to="/browse"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </NavLink>
                <button
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={toggleForm}
                >
                  Don't have an account? Sign Up
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForms;
