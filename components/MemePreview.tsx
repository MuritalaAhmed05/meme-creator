import React from 'react'
import Image from 'next/image'

export const MemePreview = ({ memeUrl }:any) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Meme Preview</h2>
      {memeUrl ? (
        <Image src={memeUrl} alt="Generated Meme" width={500} height={500} className="w-full h-auto" />
      ) : (
        <div className="bg-gray-200 w-full h-64 flex items-center justify-center text-gray-500">
          No meme generated yet
        </div>
      )}
    </div>
  )
}

