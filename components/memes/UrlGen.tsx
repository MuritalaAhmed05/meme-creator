'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const UploadPage = ({ setMemeUrl }:any) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUploading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const result = await response.json();
      setImageUrl(result.url);
      const url = `https://api.nexoracle.com/memes/affect?apikey=4aeb57e3ed0f238762&img=${encodeURIComponent(result.url)}`;
      setMemeUrl(url);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Image Uploader</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
                className="cursor-pointer"
              />
            </div>
            <Button
              type="submit"
              disabled={isUploading}
              className="w-full"
            >
              {isUploading ? 'Uploading...' : 'Upload Image'}
            </Button>
          </form>
          {error && (
            <p className="mt-4 text-red-500 text-center">{error}</p>
          )}
          {imageUrl && (
            <div className="mt-6 space-y-4">
              <p className="text-green-600 font-semibold text-center">Image uploaded successfully!</p>
              <div className="bg-gray-100 p-4 rounded-md break-all">
                <p className="text-sm font-medium text-gray-700 mb-2">Image URL:</p>
                <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {imageUrl}
                </a>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

