import React, { useState } from "react";
import { ImageIcon, Loader2, AlertCircle, LinkIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

export const AffectMeme = ({ setMemeUrl }: any) => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      new URL(img);
      const url = `https://api.nexoracle.com/memes/affect?apikey=4aeb57e3ed0f238762&img=${encodeURIComponent(img)}`;
      setMemeUrl(url);
    } catch (err) {
      setError("Please enter a valid image URL");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: any) => {
    setImg(e.target.value);
    setError("");
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
                className={error ? "border-red-500" : ""}
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
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900"
            disabled={loading || !img}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Meme"
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">
          Paste a direct image URL to generate an Affect meme
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

export default AffectMeme;