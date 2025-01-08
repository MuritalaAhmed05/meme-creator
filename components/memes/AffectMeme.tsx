import React, { useState } from 'react';
import { ImageIcon, Loader2, AlertCircle } from 'lucide-react';
import UploadPage from '../UrlGen';
// import UploadPage from 
export const AffectMeme = ({ setMemeUrl }:any) => {
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate URL
      new URL(img);
      
      const url = `https://api.nexoracle.com/memes/affect?apikey=4aeb57e3ed0f238762&img=${encodeURIComponent(img)}`;
      setMemeUrl(url);
    } catch (err) {
      setError('Please enter a valid image URL');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e:any) => {
    setImg(e.target.value);
    setError('');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      {/* Form Header */}
      <div className="flex items-center space-x-3">
        <ImageIcon className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">
          Generate Affect Meme
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label 
            htmlFor="img" 
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          
          <div className="relative">
            <input
              type="text"
              id="img"
              value={img}
              onChange={handleInputChange}
              placeholder="Enter image URL..."
              className={`
                w-full px-4 py-2.5 bg-gray-50
                border ${error ? 'border-red-300' : 'border-gray-200'}
                rounded-lg focus:outline-none focus:ring-2 
                ${error ? 'focus:ring-red-100' : 'focus:ring-blue-100'}
                ${error ? 'focus:border-red-500' : 'focus:border-blue-500'}
                transition-colors duration-200
              `}
              disabled={loading}
            />
            
            {error && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
            )}
          </div>

          {error && (
            <p className="text-sm text-red-600 mt-1">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || !img.trim()}
          className={`
            w-full flex items-center justify-center
            px-4 py-2.5 rounded-lg
            font-medium transition-all duration-200
            ${loading || !img.trim() 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-100'
            }
          `}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Generating...
            </>
          ) : (
            'Generate Meme'
          )}
        </button>
      </form>

      <div className="text-sm text-gray-500">
        Paste a direct image URL to generate an Affect meme
      </div>

      <UploadPage />
    </div>
  );
};