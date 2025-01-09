import React, { useState } from 'react';
import { Loader2, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const MyHeartMeme = ({ setMemeUrl }: any) => {
  const [text1, setText1] = useState('MOM : 8 missed call');
  const [text2, setText2] = useState('MOM : 10 missed call');
  const [text3, setText3] = useState('DAD : 1 missed call');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://api.nexoracle.com/memes/my-heart?apikey=4aeb57e3ed0f238762&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}`;
    setMemeUrl(url);
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          My Heart Meme
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="text1" className="text-sm font-medium">
              First Option
            </label>
            <Input
              id="text1"
              type="text"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Enter first option..."
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="text2" className="text-sm font-medium">
              Second Option
            </label>
            <Input
              id="text2"
              type="text"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Enter second option..."
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="text3" className="text-sm font-medium">
              Third Option
            </label>
            <Input
              id="text3"
              type="text"
              value={text3}
              onChange={(e) => setText3(e.target.value)}
              placeholder="Enter third option..."
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900"
            disabled={loading || !text1 || !text2 || !text3}
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
        Enter three options to create your heart preference meme
      </CardFooter>
    </Card>
  );
};

export default MyHeartMeme;