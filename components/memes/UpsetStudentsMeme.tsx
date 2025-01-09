import React, { useState } from 'react';
import { Loader2, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const UpsetStudentsMeme = ({ setMemeUrl }: any) => {
  const [text, setText] = useState('I am dating all ur mothers');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://api.nexoracle.com/memes/upset-students?apikey=4aeb57e3ed0f238762&text=${encodeURIComponent(text)}`;
    setMemeUrl(url);
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          Upset Students Meme
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="text" className="text-sm font-medium">
              Text
            </label>
            <Input
              id="text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text..."
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900"
            disabled={loading || !text}
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
        Enter text to create an upset students meme
      </CardFooter>
    </Card>
  );
};

export default UpsetStudentsMeme;