import React, { useState } from 'react';
import { Loader2, Trash2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const ShitMeme = ({ setMemeUrl }: any) => {
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://api.nexoracle.com/memes/shit?apikey=4aeb57e3ed0f238762&img=${encodeURIComponent(img)}`;
    setMemeUrl(url);
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trash2 className="w-5 h-5" />
          Trash Quality Meme
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="img" className="text-sm font-medium">
              Image URL
            </label>
            <Input
              id="img"
              type="url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Enter the URL of your image..."
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900"
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
        Provide an image URL to generate a trash quality version
      </CardFooter>
    </Card>
  );
};

export default ShitMeme;