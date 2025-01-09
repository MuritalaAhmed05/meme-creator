import React, { useState } from 'react';
import { Loader2, Frown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const DisappointedBlackManMeme = ({ setMemeUrl }: any) => {
  const [text1, setText1] = useState('200000000000 USD');
  const [text2, setText2] = useState('2.00000000000 USD');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://api.nexoracle.com/memes/disappointed-black-man?apikey=4aeb57e3ed0f238762&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
    setMemeUrl(url);
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Frown className="w-5 h-5" />
          Disappointed Man Meme
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="text1" className="text-sm font-medium">
              Text 1
            </label>
            <Input
              id="text1"
              type="text"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Enter first text..."
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="text2" className="text-sm font-medium">
              Text 2
            </label>
            <Input
              id="text2"
              type="text"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Enter second text..."
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900"
            disabled={loading || !text1 || !text2}
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
        Enter two lines of text for the disappointed man meme
      </CardFooter>
    </Card>
  );
};

export default DisappointedBlackManMeme;