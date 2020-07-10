import { Controller, Get, Param } from "@nestjs/common";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import * as Pokedex from "pokedex-promise-v2";

export class PokemonItem {
  @ApiProperty()
  name: string;
  @ApiProperty()
  url?: string | any;
}

export class PokemonResponse {
  @ApiProperty({ type: [PokemonItem] })
  pokemon: PokemonItem[];
}

@ApiTags("pokemon")
@Controller("/pokemon")
export class PokemonController {
  private _pokedex = new Pokedex();
  
  @Get("/")
  public async getAllPokemon(): Promise<PokemonResponse> {
    const answer = await this._pokedex.getPokemonsList();
    return {
      pokemon: answer.results
    };
  }
  
  @Get("/:id")
  public async getPokemonById(@Param('id') id: string): Promise<PokemonItem> {
    const answer = await this._pokedex.getPokemonByName(id);
    return answer as unknown as PokemonItem;
  }
}
