import { Test, TestingModule } from '@nestjs/testing';
import { CloudinaryService } from '../../src/cloudinary/cloudinary.service';
import { InternalServerErrorException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

jest.mock('cloudinary', () => ({
  v2: {
    config: jest.fn(),
    uploader: {
      upload: jest.fn(),
    },
  },
}));

describe('CloudinaryService', () => {
  let service: CloudinaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloudinaryService],
    }).compile();

    service = module.get<CloudinaryService>(CloudinaryService);

    (cloudinary.uploader.upload as jest.Mock).mockReset().mockResolvedValue({
      secure_url: 'https://cloudinary.com/fake-url',
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('uploadFiles', () => {
    it('uploads multiple files and returns URLs', async () => {
      const files = [
        { buffer: Buffer.from('1'), mimetype: 'image/png', originalname: 'a.png' } as Express.Multer.File,
        { buffer: Buffer.from('2'), mimetype: 'image/jpeg', originalname: 'b.jpg' } as Express.Multer.File,
      ];

      const result = await service.uploadFiles(files);
      expect(result).toEqual(['https://cloudinary.com/fake-url', 'https://cloudinary.com/fake-url']);
      expect(cloudinary.uploader.upload).toHaveBeenCalledTimes(2);
    });

    it('throws InternalServerErrorException if secure_url is null', async () => {
      (cloudinary.uploader.upload as jest.Mock).mockResolvedValue({ secure_url: null });
      const files = [{ buffer: Buffer.from('1'), mimetype: 'image/png', originalname: 'a.png' } as Express.Multer.File];

      await expect(service.uploadFiles(files)).rejects.toThrow(InternalServerErrorException);
    });

    it('throws InternalServerErrorException if uploader throws', async () => {
      (cloudinary.uploader.upload as jest.Mock).mockImplementation(() => {
        throw new Error('Network error');
      });
      const files = [{ buffer: Buffer.from('1'), mimetype: 'image/png', originalname: 'a.png' } as Express.Multer.File];

      await expect(service.uploadFiles(files)).rejects.toThrow(InternalServerErrorException);
    });
  });
});
