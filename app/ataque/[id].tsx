"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pokemon } from "../../src/db/pokemons";
import { useRouter } from "next/router";

export default function Ataque() {
  const [pokemon, setPokemon] = useState<Pokemon>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`/api/pokemons/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  console.log("Pokemons" + pokemon);

  return (
    <div>
      <Image src={pokemon.image} width={300} height={300} alt={pokemon.name} />
    </div>
  );
}
