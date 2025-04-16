import React, { useState } from "react";

const MAX_COUNT = 10;

export default function ClickCounterApp() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleIncrease = () => {
    if (count < MAX_COUNT) {
      const newCount = count + 1;
      setCount(newCount);
      setMessage(newCount === MAX_COUNT ? "You've reached the limit!" : "");
    } else {
      setMessage("You've reached the limit!");
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Click Counter</h1>
        <p className="text-4xl font-semibold mb-2">{count}</p>
        {message && <p className="text-red-500 text-sm mb-4">{message}</p>}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleIncrease}
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
          >
            Increase
          </button>
          <button
            onClick={handleDecrease}
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}
