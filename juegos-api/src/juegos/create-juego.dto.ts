import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

// DTO
export class CreateJuegoDto {
  @IsString() @IsNotEmpty() titulo: string;
  @IsString() @IsNotEmpty() genero: string;
  @IsInt() @Min(0) @Max(10) puntuacion: number;
}
