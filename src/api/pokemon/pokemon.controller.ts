import { Controller, Get } from "@nestjs/common";
import { ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";

const Pokedex = require("pokedex-promise-v2");

export class Pokemon {
  @ApiProperty()
  name: string;
  @ApiProperty()
  url: string;
}

export class PokemonResponse {
  @ApiProperty({ type: [Pokemon] })
  pokemon: Pokemon[];
}

@ApiTags("pokemon")
@Controller("/pokemon")
export class PokemonController {
  private _pokedex = new Pokedex();
  
  @Get("/")
  @ApiResponse({
    description: "Response received",
    type: PokemonResponse
  })
  public async allPokemon(): Promise<PokemonResponse> {
    const answer = await this._pokedex.getPokemonsList();
    return {
      pokemon: answer.results
    };
  }
}
