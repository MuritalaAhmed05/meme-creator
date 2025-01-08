// pages/upload.tsx
import { useState, ChangeEvent } from "react";
import axios from "axios";

interface ImageData {
  url: string;
  success: boolean;
  message?: string;
}

export default function UploadPage() {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Handle image file change
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  // Upload image to ImgBB
  const uploadImage = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    setLoading(true);

    // Create FormData to send the image
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post<ImageData>(
        "https://api.imgbb.com/1/upload?key=ddff28f2c9b7d707ff03800845a016ca",
        formData
      );

      if (response.data.success) {
        setImageUrl(response.data.url);
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-6">Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={uploadImage}
          className="w-full bg-blue-500 text-white p-2 rounded mb-4"
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
        
        {imageUrl && (
          <div className="mt-4 text-center">
            <p className="text-green-500">Image uploaded successfully!</p>
            <a
              href={imageUrl}
              target="_blank"
              className="text-blue-500"
              rel="noopener noreferrer"
            >
              View Image
            </a>
            <div className="mt-4">
              <img src={imageUrl} alt="Uploaded" className="max-w-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
