import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider
} from "../firebaseConfig";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) navigate("/");
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      navigate("/");
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      setError("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      if (err.code === "auth/user-not-found") setError("No account found with this email.");
      else if (err.code === "auth/wrong-password") setError("Incorrect password.");
      else if (err.code === "auth/email-already-in-use") setError("Email is already in use.");
      else setError("Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/auth");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {user ? (
          <div className="text-center">
            <h2 className="text-3xl font-light">Welcome, {user.displayName || "User"}!</h2>
            <img
              src={user.photoURL || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mt-4"
            />
            <p className="text-gray-500 mt-2">{user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-light text-center mb-6">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            {error && (
              <p className="text-red-500 text-center mb-4">{error}</p>
            )}

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

              <div className="mb-4 relative">
                <label className="block text-gray-600 text-sm">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                  required
                  autoComplete={isLogin ? "current-password" : "new-password"}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 cursor-pointer text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>

              {!isLogin && (
                <div className="mb-4 relative">
                  <label className="block text-gray-600 text-sm">Confirm Password</label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                    required
                    autoComplete="new-password"
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-9 cursor-pointer text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>
              )}

              <button
                type="submit"
                className={`w-full py-2 rounded-lg transition-all ${loading ? "bg-gray-400" : "bg-black text-white hover:bg-gray-800"}`}
                disabled={loading}
              >
                {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            <button
              onClick={handleGoogleAuth}
              className="w-full mt-4 bg-white text-black border border-gray-300 py-2 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              disabled={loading}
            >
              <FcGoogle size={22} />
              {loading ? "Signing in..." : isLogin ? "Sign in with Google" : "Sign up with Google"}
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-black font-light hover:underline"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
