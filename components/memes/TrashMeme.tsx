import React, { useState } from 'react';
import { Loader2, Trash, LinkIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const TrashMeme = ({ setMemeUrl }: any) => {
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://api.nexoracle.com/memes/trash?apikey=4aeb57e3ed0f238762&img=${encodeURIComponent(img)}`;
    setMemeUrl(url);
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trash className="w-5 h-5" />
          Trash Meme Generator
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
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Enter image URL..."
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
      
      <CardFooter className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">
          Enter an image URL to create a trash meme
        </p>
        
        <div className="w-full border-t pt-4">
          <Link href="/image-to-url">
            <Button 
              variant="outline" 
              className="w-full group hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <LinkIcon className="w-4 h-4 mr-2 group-hover:text-blue-600" />
              Convert Image to URL
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TrashMeme;