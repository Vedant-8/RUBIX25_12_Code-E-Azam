import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-emerald-400 to-teal-500 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-teal-800 mb-6">
            Welcome Back
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-teal-800 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-emerald-400"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-teal-800 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-emerald-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-center text-teal-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-emerald-700 font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
