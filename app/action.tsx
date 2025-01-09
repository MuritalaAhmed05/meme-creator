'use server'

import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function uploadImage(formData: FormData) {
  const file = formData.get('file') as File;
  const filename = file.name;

  try {
    const blob = await put(filename, file, { access: 'public' });
    revalidatePath('/');
    return { success: true, url: blob.url };
  } catch (error) {
    console.error('Error uploading file:', error);
    return { success: false, error: 'Failed to upload image' };
  }
}

