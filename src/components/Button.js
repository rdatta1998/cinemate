import React from 'react'


export const Button = ({children}) => {
  return (
    <button className="w-64 text-white tet-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg py-2 px-2 font-medium">
      {children}
    </button>
  );
}
