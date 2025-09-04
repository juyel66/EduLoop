import React from 'react';
import Button from '../../Components/common/Button';
import { Link } from 'react-router';

const ChooseYear: React.FC = () => {
  return (
    <div className="relative min-h-screen ">
      {/* Side Button fixed with Navbar alignment */}
      <div className="absolute ml-10 left-6 z-50">
        <Button />
      </div>

      {/* Main Login Content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Container for the login card */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="mx-auto h-20"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">Extra Handen</h1>
          <p className="text-gray-600 mb-8">
            Enter the access code to start practicing.
          </p>

          {/* Passcode input field */}
          <div className="mb-6 text-left">
            <label
              htmlFor="passcode"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Passcode
            </label>
            <input
              type="password"
              id="passcode"
              placeholder="Access code"
              className="w-full px-4 py-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Log In Button */}
          <Link to='/choose-year'
            type="submit"
            className="w-full flex text-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Log In
          </Link>

          {/* Privacy statement */}
          <p className="text-gray-500 text-xs mt-6 mb-4">
            No personal accounts. School-safe. No tracking. 
          </p>

          {/* Sign up link */}
          <a
            className="text-orange-500 hover:underline text-sm font-semibold"
            href="#"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChooseYear;
