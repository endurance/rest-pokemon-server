import { Module } from '@nestjs/common';
import { PokemonModule } from "./api/pokemon/pokemon.module";

@Module({
  imports: [PokemonModule],
})
export class AppModule {}
