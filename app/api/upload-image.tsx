// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server'

const IMGBB_API_KEY = 'ddff28f2c9b7d707ff03800845a016ca'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    const imgbbFormData = new FormData()
    imgbbFormData.append('image', file)
    
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      {
        method: 'POST',
        body: imgbbFormData,
      }
    )

    const data = await response.json()
    return NextResponse.json({ url: data.data.url })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}