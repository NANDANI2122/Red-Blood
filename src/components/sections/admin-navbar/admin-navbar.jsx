import React from "react";
import { Link } from "react-router-dom";

// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex items-center">
              <Link
                to="/admin"
                className="text-red-600 font-semibold text-lg hover:text-red-700 transition-colors"
              >
                Red Blood Admin
              </Link>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/admin"
                className="px-3 py-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/admin/donate-blood"
                className="px-3 py-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                Donations
              </Link>
              <Link
                to="/admin/need-blood"
                className="px-3 py-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                Requests
              </Link>
            </div>

            {/* Profile Section */}
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}
