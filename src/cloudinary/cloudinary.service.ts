import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadFiles(files: Express.Multer.File[]): Promise<string[]> {
    const urls: string[] = [];

    for (const file of files) {
      try {
        const url = await this.uploadFileBuffer(file);
        console.log('Uploaded file URL:', url);
        urls.push(url);
      } catch (err) {
        console.error('Cloudinary upload error:', err);
        throw new InternalServerErrorException('Failed to upload file to Cloudinary');
      }
    }

    return urls;
  }

  private async uploadFileBuffer(file: Express.Multer.File): Promise<string> {
  const base64 = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

  const result: UploadApiResponse = await cloudinary.uploader.upload(base64, {
    resource_type: 'auto',
    folder: 'heroes',
    public_id: file.originalname.split('.')[0],
    overwrite: true,
  });

  if (!result.secure_url) {
    throw new InternalServerErrorException('Cloudinary upload failed');
  }

  return result.secure_url;
}
}
