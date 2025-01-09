import React, { useState } from 'react';
import { Loader2, Image } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const MemeGeneratorMeme = ({ setMemeUrl }: any) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://api.nexoracle.com/memes/meme-generator?apikey=4aeb57e3ed0f238762&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&img=${encodeURIComponent(img)}`;
    setMemeUrl(url);
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image className="w-5 h-5" />
          Custom Meme Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="text1" className="text-sm font-medium">
              Top Text
            </label>
            <Input
              id="text1"
              type="text"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Enter top text..."
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="text2" className="text-sm font-medium">
              Bottom Text
            </label>
            <Input
              id="text2"
              type="text"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Enter bottom text..."
              required
            />
          </div>
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
            disabled={loading || !text1 || !text2 || !img}
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
        Create a custom meme by providing an image URL and two lines of text
      </CardFooter>
    </Card>
  );
};

export default MemeGeneratorMeme;