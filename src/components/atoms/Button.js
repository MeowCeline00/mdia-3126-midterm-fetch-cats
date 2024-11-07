// Create a button atom to use in the webapp

import React from "react";

export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-10 py-4 bg-black text-white text-xl 
      font-semibold round-lg shadow-md hover:bg-gray-800 
      hover:shadow-lg transition duration-200 ease-in-out "
    >
      {label}
    </button>
  );
}
