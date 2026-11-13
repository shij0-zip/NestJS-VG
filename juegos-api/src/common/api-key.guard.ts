import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

// GUARD: pide el header x-api-key
@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const key = process.env.API_KEY || 'gamer123';
    if (req.headers['x-api-key'] !== key) throw new UnauthorizedException('API key inválida');
    return true;
  }
}
