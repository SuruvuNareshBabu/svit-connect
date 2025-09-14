import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 text-center px-4">
      {/* College Logo */}

      <img
        src="https://tse3.mm.bing.net/th/id/OIP.eCjG-5y-26449bki6guTRQHaG_?pid=Api&P=0&h=180"
        alt="SVIT Logo"
        className="w-28 h-28 mb-6 drop-shadow-lg"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-3">
        Sri Venkateswara Institute of Technology<br></br>(Autonomous)
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        Welcome to the <span className="font-semibold text-indigo-600">SVIT LMS Portal</span> –  
        your one-stop platform for courses, resources, and academic progress.
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Go to Dashboard
        </Link>
        <Link
          to="/profile"
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          My Profile
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          About College
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Sri Venkateswara Institute of Technology. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
