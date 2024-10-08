export interface Pokemon {
    id: number,  
    name: string,
    types: string [],
    weaknesses: string []
}
export const pokemons: Pokemon [] =  [
    {
      id: 1,
      name: "pikachu",
      types: ["electric"],
      weaknesses: ["ground"]
    },
    {
      id: 2,
      name: "gabite",
      types: ["dragon", "ground"],
      weaknesses: ["ice", "dragon", "fairy"]
    },
    {
      id: 3,
      name: "charizard",
      types: ["fire", "flying"],
      weaknesses: ["water", "electric", "rock"]
    },
    {
      id: 4,
      name: "bulbasaur",
      types: ["grass", "poison"],
      weaknesses: ["fire", "psychic", "flying", "ice"]
    },
    {
      id: 5,
      name: "gengar",
      types: ["ghost", "poison"],
      weaknesses: ["ghost", "psychic", "ground", "dark"]
    }
  ];  