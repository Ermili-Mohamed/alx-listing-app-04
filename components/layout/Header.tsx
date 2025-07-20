"use client";

import React from "react";
import { Input } from "@/components/ui/input"; // Replace if not using UI library
import { Button } from "@/components/ui/button";

const categories = ["Rooms", "Mansion", "Countryside", "Beachfront", "City View"];

const Header: React.FC = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold">🏠 ListingApp</div>

        <div className="flex-1 px-4">
          <Input
            type="text"
            placeholder="Search properties..."
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        <div className="flex gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Sign Up</Button>
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
