import { listPokemon, pokemonDetail } from '@/config/api_path'
import { Pokemon } from '@/model/pokemon'
import { PokemonDetail } from '@/model/pokemon_detail'
import apiClient from '@/network/api_client'

export const PokeRepository = {
  async getListPokemon(limit = 20, offset = 0) {
    const response = await apiClient.get(listPokemon, {
      params: { limit, offset },
    })

    return response.data.results.map((item) => new Pokemon(item))
  },

  async getPokemonDetail(pokemonName) {
    const response = await apiClient.get(pokemonDetail(pokemonName))

    const pokemon = new PokemonDetail({
      id: response.data.id,
      type: response.data.types.map((typeInfo) => typeInfo.type.name),
      height: response.data.height,
      weight: response.data.weight,
      stats: {
        hp: response.data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
        attack: response.data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
        defense: response.data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
        specialAttack: response.data.stats.find((stat) => stat.stat.name === 'special-attack')
          .base_stat,
        specialDefense: response.data.stats.find((stat) => stat.stat.name === 'special-defense')
          .base_stat,
        speed: response.data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
      },
    })
    console.log(pokemon)

    return pokemon
  },
}
