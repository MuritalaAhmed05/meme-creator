import React, { useState } from 'react';
import { ImageIcon, Loader2, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const AffectMeme = ({ setMemeUrl }: any) => {
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
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

  const handleInputChange = (e: any) => {
    setImg(e.target.value);
    setError('');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5" />
          Generate Affect Meme
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="imageUrl" className="text-sm font-medium">
              Image URL
            </label>
            <div className="relative">
              <Input
                id="imageUrl"
                type="text"
                placeholder="Paste image URL here..."
                value={img}
                onChange={handleInputChange}
                className={error ? 'border-red-500' : ''}
              />
              {error && (
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
              )}
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-800"
            disabled={loading || !img}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Meme'
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="text-sm text-gray-500">
        Paste a direct image URL to generate an Affect meme
      </CardFooter>
    </Card>
  );
};

export default AffectMeme;