import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Toggle Between Login & Signup */}
        <h2 className="text-3xl font-light text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-600 text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-600 text-sm">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Button */}
        <p className="text-center text-gray-500 text-sm mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-black font-light hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        {/* Forgot Password */}
        {isLogin && (
          <p className="text-center text-gray-500 text-sm mt-2">
            <Link to="/forgot-password" className="text-black font-light hover:underline">
              Forgot password?
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
