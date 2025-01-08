import React from 'react'

export const BaseMemeForm = ({ children, onSubmit }:any) => {
  return (
    <form onSubmit={onSubmit} className="bg-white p-4 rounded-lg shadow">
      {children}
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Generate Meme
      </button>
    </form>
  )
}

