import { Injectable } from '@nestjs/common';
import { Juego } from './juego.entity';
import { CreateJuegoDto } from './create-juego.dto';
import { JuegoNoEncontradoException } from './juego-no-encontrado.exception';

// SERVICIO (datos en memoria, sin base de datos)
@Injectable()
export class JuegosService {
  private juegos: Juego[] = [
    { id: 1, titulo: 'Zelda: Breath of the Wild', genero: 'Aventura', puntuacion: 10 },
  ];
  private siguienteId = 2;

  findAll(): Juego[] {
    return this.juegos;
  }

  findOne(id: number): Juego {
    const juego = this.juegos.find((j) => j.id === id);
    if (!juego) throw new JuegoNoEncontradoException(id);
    return juego;
  }

  create(dto: CreateJuegoDto): Juego {
    const juego = { id: this.siguienteId++, ...dto };
    this.juegos.push(juego);
    return juego;
  }

  remove(id: number): void {
    this.findOne(id);
    this.juegos = this.juegos.filter((j) => j.id !== id);
  }
}
