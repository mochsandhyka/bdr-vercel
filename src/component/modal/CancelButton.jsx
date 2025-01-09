import React from "react";

export const CancelButton = ({ onClick, className = "" }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="text-sm w-full md:w-auto py-3 px-40 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Cancel
      </button>
    </div>
  );
};

export default CancelButton;
