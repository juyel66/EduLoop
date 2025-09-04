import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      {/* Container for the login card */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          
          <img
            src="/path/to/your/extra_handen_logo.png"
            alt="Extra Handen Logo"
            className="mx-auto h-20" 
          />
        </div>

        {/* Title and description */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Extra Handen</h1>
        <p className="text-gray-600 mb-8">
          Enter the access code to start practicing.
        </p>

        {/* Passcode input field */}
        <div className="mb-6 text-left">
          <label htmlFor="passcode" className="block text-gray-700 text-sm font-semibold mb-2">
            Passcode
          </label>
          <input
            type="password" 
            id="passcode"
            placeholder="Access code"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Log In Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Log In
        </button>

        {/* Privacy statement */}
        <p className="text-gray-500 text-xs mt-6 mb-4">
          No personal accounts. School-safe. No tracking.
        </p>

        {/* Sign up link */}
        <a href="/signup" className="text-orange-500 hover:underline text-sm font-semibold">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LoginPage;