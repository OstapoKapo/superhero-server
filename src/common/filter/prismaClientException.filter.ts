import { ArgumentsHost, Catch, ExceptionFilter, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    if (exception.code === 'P2002') {
      throw new ConflictException('Unique constraint violation (field must be unique)');
    }
    throw new InternalServerErrorException('Database error');
  }
}