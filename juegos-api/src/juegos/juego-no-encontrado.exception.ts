import { NotFoundException } from '@nestjs/common';

// EXCEPCIÓN personalizada
export class JuegoNoEncontradoException extends NotFoundException {
  constructor(id: number) {
    super(`No existe el juego con id ${id}`);
  }
}
