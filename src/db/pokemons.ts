export interface Pokemon {
  id: number,
  name: string,
  types: string[],
  weaknesses: string[],
  image: string
}
export const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "pikachu",
    types: ["electric"],
    weaknesses: ["ground"],
    image: "/pikachu.png"
  },
  {
    id: 2,
    name: "gabite",
    types: ["dragon", "ground"],
    weaknesses: ["ice", "dragon", "fairy"],
    image: "/gabite.svg"
  },
  {
    id: 3,
    name: "charizard",
    types: ["fire", "flying"],
    weaknesses: ["water", "electric", "rock"],
    image: "/charizard.png"
  },
  {
    id: 4,
    name: "bulbasaur",
    types: ["grass", "poison"],
    weaknesses: ["fire", "psychic", "flying", "ice"],
    image: "/bulbasaur.webp"
  },
  {
    id: 5,
    name: "gengar",
    types: ["ghost", "poison"],
    weaknesses: ["ghost", "psychic", "ground", "dark"],
    image: "/gengar.png"
  }
];  