import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";

interface IRequestCorrelation extends Request {
    correlationId?: string;
}


@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const correlationId = (request as IRequestCorrelation).correlationId;

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';

        if(exception instanceof HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse();
            message = 
                typeof res === 'string'
                    ? res
                    : (res as { message?: string }).message ?? 'Internal server error';
        }

        const errorResponse = {
            statusCode: status,
            message,
            timestamp: new Date().toISOString(),
            path: request.url,
            correlationId
        }

        console.log(errorResponse)

        response.status(status).json(errorResponse);
    }
}