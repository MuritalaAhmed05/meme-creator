'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Upload,
  ArrowLeft,
  Link as LinkIcon, 
  Copy, 
  CheckCircle,
  AlertCircle,
  Loader2
} from "lucide-react"

export const UploadPage = ({ setMemeUrl }: any) => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const formData = new FormData();
      formData.append('image', e.dataTransfer.files[0]);
      await handleUpload(formData);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handleUpload(formData);
  };

  const handleUpload = async (formData: FormData) => {
    setIsUploading(true);
    setError(null);

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
      
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const copyToClipboard = async () => {
    if (imageUrl) {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md relative">
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute left-2 top-2 hover:bg-gray-100"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Upload className="h-6 w-6" />
            Image Uploader
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            onDragEnter={handleDrag}
          >
            <div
  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
    ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
    ${isUploading ? 'bg-gray-50' : 'hover:border-blue-500 hover:bg-blue-50'}`}
  onDragEnter={handleDrag}
  onDragLeave={handleDrag}
  onDragOver={handleDrag}
  onDrop={handleDrop}
>
  <label htmlFor="image" className="cursor-pointer flex flex-col items-center gap-2">
    {isUploading ? (
      <>
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <p className="text-sm text-gray-500">Uploading your image...</p>
      </>
    ) : (
      <>
        <Upload className="h-8 w-8 text-gray-400" />
        <p className="text-sm text-gray-500">
          Drag and drop your image here, or click to browse
        </p>
      </>
    )}
  </label>
  <Input
    type="file"
    id="image"
    name="image"
    accept="image/*"
    required
    className="hidden"
    onChange={(e) => {
      if (e.target.files?.[0]) {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        handleUpload(formData);
      }
    }}
  />
</div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>

          {imageUrl && (
            <div className="mt-6 space-y-4">
              <Alert variant="default" className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-green-700">
                  Image uploaded successfully!
                </AlertDescription>
              </Alert>

              <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <LinkIcon className="h-4 w-4" />
                    Image URL
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {copied ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-sm text-gray-600 break-all">
                  {imageUrl}
                </p>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="text-center text-sm text-gray-500">
          Supports JPG and PNG files
        </CardFooter>
      </Card>
    </div>
  );
};

export default UploadPage;