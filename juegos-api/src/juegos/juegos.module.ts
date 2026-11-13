import { Module } from '@nestjs/common';
import { JuegosController } from './juegos.controller';
import { JuegosService } from './juegos.service';

@Module({ controllers: [JuegosController], providers: [JuegosService] })
export class JuegosModule {}
