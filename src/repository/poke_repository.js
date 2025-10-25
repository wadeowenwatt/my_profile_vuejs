import { listPokemon } from '@/config/api_path'
import { Pokemon } from '@/model/pokemon'
import apiClient from '@/network/api_client'

export const PokeRepository = {
  async getListPokemon(limit = 20, offset = 0) {
    const response = await apiClient.get(listPokemon, {
      params: { limit, offset },
    })

    return response.data.results.map((item) => new Pokemon(item))
  },
}
