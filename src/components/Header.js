import React from "react";

function Header() {
  return (
    <nav className="bg-blue-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-2xl font-extrabold px-4 py-2 rounded">NASA API Application</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;