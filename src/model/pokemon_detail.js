export class PokemonDetail {
  constructor({ id, type, height, weight, stats }) {
    this.id = id
    this.type = type
    this.height = height
    this.weight = weight
    this.stats = stats
  }

  getImageUrl() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`
  }
}
