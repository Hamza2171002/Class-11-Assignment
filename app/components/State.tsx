'use client'

import React, { useState } from "react";

export default function State() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);

  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-screen p-4">
      <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-lg rounded-lg p-12 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter App</h1>
        <p className="text-4xl font-semibold text-white my-6">{counter}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleIncrement}
            className="bg-green-500 font-bold text-white hover:bg-green-600 px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-500 font-bold text-white hover:bg-red-600 px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
            className="bg-teal-500 font-bold text-white hover:bg-teal-600 px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}