import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-emerald-400 to-green-500 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-emerald-800 mb-6">
            Create an Account
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-emerald-800 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-emerald-800 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-emerald-800 font-semibold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-emerald-800 font-semibold mb-2"
                htmlFor="roll"
              >
                Role
              </label>
              <select
                id="roll"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              >
                <option value="individual">Individual User</option>
                <option value="organization">Organization</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                className="block text-emerald-800 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white p-3 rounded-lg hover:bg-emerald-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-emerald-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-teal-700 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
