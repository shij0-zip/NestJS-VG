import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { LoggingInterceptor } from './common/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // PIPE
  app.useGlobalFilters(new HttpExceptionFilter()); // FILTER
  app.useGlobalInterceptors(new LoggingInterceptor()); // INTERCEPTOR
  app.useStaticAssets(join(process.cwd(), 'public')); // la página web
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
