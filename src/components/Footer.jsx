import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} TarunCodes. All rights reserved.</p>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/TarunCodesFr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://discordapp.com/users/847373992787705876"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            Discord
          </a>
          <a
            href="mailto:akurax4@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}