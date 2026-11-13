import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

// INTERCEPTOR: imprime cuánto tarda cada petición
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const inicio = Date.now();
    return next.handle().pipe(tap(() => console.log(`${req.method} ${req.url} - ${Date.now() - inicio}ms`)));
  }
}
