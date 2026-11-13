import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

// FILTER: da formato uniforme a todos los errores
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();
    const status = exception.getStatus();
    const body: any = exception.getResponse();
    res.status(status).json({
      ok: false,
      status,
      mensaje: body.message ?? exception.message,
      fecha: new Date().toISOString(),
    });
  }
}
