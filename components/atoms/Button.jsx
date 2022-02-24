import React from "react";

export default function Button({ type, children }) {
  return (
    <button
      type={type}
      className="py-2 px-8 bg-red-500 text-lg text-slate-50 font-bold rounded-md hover:bg-red-600 active:bg-red-700"
    >
      {children}
    </button>
  );
}
