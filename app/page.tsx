import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ImagePlus, Sparkles, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100">
      <h1 className="text-center text-2xl font-bold ">Made with Love by💖 
          <a href="https://ahmedisawebdev.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'> Ahmed</a>
        </h1>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 text-transparent bg-clip-text">
              MemeForge
            </h1>
            <p className="text-xl text-gray-600">
              Transform your ideas into memes in seconds
            </p>
          </div>

          <div className="flex justify-center gap-4 py-8">
            <Link href="/create-memes">
              <Button 
                className="group bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900 text-lg px-6 py-6"
              >
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="p-6">
              <CardContent className="space-y-2 text-center">
                <ImagePlus className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-xl font-semibold">Multiple Templates</h3>
                <p className="text-gray-600">
                  Choose from our growing collection of meme templates
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-2 text-center">
                <Sparkles className="w-12 h-12 mx-auto text-blue-600" />
                <h3 className="text-xl font-semibold">Easy to Use</h3>
                <p className="text-gray-600">
                  Simple interface to create memes in seconds
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-2 text-center">
                <svg 
                  className="w-12 h-12 mx-auto text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
                <h3 className="text-xl font-semibold">Free to Use</h3>
                <p className="text-gray-600">
                  Create and download memes without any cost
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
