import React from "react";
import { Box } from "@chakra-ui/react";

function Header() {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">NASA API Application</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
