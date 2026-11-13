import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { JuegosService } from './juegos.service';
import { CreateJuegoDto } from './create-juego.dto';
import { ApiKeyGuard } from '../common/api-key.guard';

// CONTROLLER
@Controller('juegos')
export class JuegosController {
  constructor(private readonly juegosService: JuegosService) {}

  @Get()
  findAll() {
    return this.juegosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { // PIPE
    return this.juegosService.findOne(id);
  }

  @Post()
  @UseGuards(ApiKeyGuard) // GUARD
  create(@Body() dto: CreateJuegoDto) {
    return this.juegosService.create(dto);
  }

  @Delete(':id')
  @UseGuards(ApiKeyGuard)
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    this.juegosService.remove(id);
  }
}
