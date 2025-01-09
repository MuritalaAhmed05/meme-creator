import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const image = formData.get('image') as File;

  if (!image) {
    return NextResponse.json({ error: 'No image file provided' }, { status: 400 });
  }

  const body = new FormData();
  body.append('image', image);

  try {
    const response = await fetch('https://api.imgbb.com/1/upload?key=ddff28f2c9b7d707ff03800845a016ca', {
      method: 'POST',
      body: body,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const result = await response.json();
    return NextResponse.json({ success: true, url: result.data.url });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}

