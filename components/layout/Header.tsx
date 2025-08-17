"use client";

import React from "react";

const categories = ["Rooms", "Mansion", "Countryside", "Beachfront", "City View"];

const Header: React.FC = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold">🏠 ListingApp</div>

        <div className="flex-1 px-4">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <span
            key={cat}
            className="text-sm border rounded-full px-3 py-1 hover:bg-gray-100 cursor-pointer"
          >
            {cat}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
