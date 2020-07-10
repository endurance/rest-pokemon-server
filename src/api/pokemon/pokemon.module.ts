import { PokemonController } from "./pokemon.controller";
import { Module } from "@nestjs/common";

@Module({
  controllers: [PokemonController]
})
export class PokemonModule {}
