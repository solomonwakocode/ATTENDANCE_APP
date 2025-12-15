import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from "../Components/Header"
import Footer from '../Components/Footer'
import Image from '/student.png'
import Pattern from '/pattern.png'

function Signin() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
setError("");
setLoading(true);

try {
  const response = await fetch(
    "https://attendance-demo.onrender.com/api/v1/auth/sign-in",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  localStorage.setItem("token", data.token);
  navigate("/dashboard");
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
}


};
  return (
    <div>
      <Header/>
      <div>
 <div className="flex justify-center items-center h-[75vh] bg-white px-4"> <div className="flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full form" style={{backgroundImage: ` url(${Pattern})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
{/* Form Section */} <div className="flex flex-col justify-center items-center md:w-1/2 p-10"> <h2 className="font-extrabold text-3xl text-orange-600 mb-6">
Hello Admin </h2>


      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-sm space-y-5 font-extrabold"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
            required
          />
        </div>

        <div className="flex flex-col">
  <label htmlFor="password" className="mb-1 text-gray-700">
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      placeholder="At least 8 characters"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10
                 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
      required
    />

    {/* Eye Icon */}
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-orange-500"
    >
      {showPassword ? (
        // Eye Off SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.032.156-2.026.45-2.962M9.88 9.88a3 3 0 104.243 4.243M6.1 6.1l11.8 11.8"
          />
        </svg>
      ) : (
        // Eye SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      )}
    </button>
  </div>
</div>


        {error && <p className="text-red-600 font-semibold">{error}</p>}

        <div className="text-right">
          <a
            href="#"
            className="text-sm text-orange-600 hover:underline hover:text-orange-700 transition-colors"
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 text-white font-bold py-2 rounded-lg mt-2 hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="text-sm text-center mt-3 text-gray-700">
          Don’t have an account?{" "}
          <Link
            to="/Signup"
            className="text-orange-600 font-semibold hover:underline hover:text-orange-700"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>

    {/* Image Section */}
    <div className="hidden md:flex md:w-1/2 justify-center items-center">
      <img
        src={Image}
        alt="Admin dashboard illustration"
        className="object-contain"
      />
    </div>
  </div>
</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Signin
