import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">
            TarunCodes
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-400 transition duration-300">Home</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">About</a>
            {/* <a href="#" className="hover:text-blue-400 transition duration-300">Projects</a> */}
            <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-xl">✖</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">About</a>
            {/* <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">Projects</a> */}
            <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}