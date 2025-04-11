import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Tarun<span className="text-gray-500">Codes.</span>
        </h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 font-bold">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          {/* <li><a href="#projects" className="hover:text-gray-400">Projects</a></li> */}
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 bg-gray-800 p-4 rounded-lg cursor-pointer font-bold">
          <a href="#home" className="block text-center py-2 hover:text-gray-400">Home</a>
          <a href="#about" className="block text-center py-2 hover:text-gray-400">About</a>
          {/* <a href="#projects" className="block text-center py-2 hover:text-gray-400">Projects</a> */}
          <a href="#contact" className="block text-center py-2 hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
