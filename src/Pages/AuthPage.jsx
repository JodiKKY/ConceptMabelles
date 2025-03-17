import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; // Google Icon

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("Google Login Success:", result.user);
          navigate("/");
        }
      })
      .catch((error) => console.error("Google Sign-In Error:", error));
  }, [navigate]);

  const handleGoogleAuth = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-light text-center mb-6">{isLogin ? "Login" : "Sign Up"}</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleAuth}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
              required 
              autoComplete="email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
              required 
              autoComplete={isLogin ? "current-password" : "new-password"} // ✅ Fixes the warning
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Google Sign-In Button */}
        <button 
          onClick={handleGoogleAuth} 
          className="w-full mt-4 bg-white text-black border border-gray-300 py-2 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} /> {isLogin ? "Sign in with Google" : "Sign up with Google"}
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-black font-light hover:underline">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;