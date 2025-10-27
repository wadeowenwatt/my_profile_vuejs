export class PokemonDetail {
  constructor({ id, type, height, weight, hp, attack, defense, specialAttack, specialDefense, speed }) {
    this.id = id
    this.type = type
    this.height = height
    this.weight = weight
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.specialAttack = specialAttack
    this.specialDefense = specialDefense
    this.speed = speed
  }

  getImageUrl() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`
  }
}
