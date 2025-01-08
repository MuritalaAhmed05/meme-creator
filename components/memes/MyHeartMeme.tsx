import React, { useState } from 'react'

export const MyHeartMeme = ({ setMemeUrl }:any) => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const url = `https://api.nexoracle.com/memes/my-heart?apikey=4aeb57e3ed0f238762&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}`
    setMemeUrl(url)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
      <div className="mb-4">
        <label htmlFor="text1" className="block text-sm font-medium text-gray-700 mb-2">
          Text 1
        </label>
        <input
          type="text"
          id="text1"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="text2" className="block text-sm font-medium text-gray-700 mb-2">
          Text 2
        </label>
        <input
          type="text"
          id="text2"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="text3" className="block text-sm font-medium text-gray-700 mb-2">
          Text 3
        </label>
        <input
          type="text"
          id="text3"
          value={text3}
          onChange={(e) => setText3(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Generate Meme
      </button>
    </form>
  )
}

