export class Pokemon {
  constructor({ name, url }) {
    this.name = name
    this.url = url
  }

  getImageUrl() {
    const match = this.url.match(/\/pokemon\/(\d+)\//)
    const index = match ? Number(match[1]) : null
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
  }
}
