"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pokemon } from "../../../src/db/pokemons";

interface AtaqueProps {
  params: {
    id: string;
  };
}

export default function Ataque({ params }: AtaqueProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`/api/pokemons/${id}`)
        .then((response) => response.json())
        .then((data) => setPokemon(data))
        .catch((error) => console.error("Erro ao buscar dados:", error));
    }
  }, [id]);

  if (!pokemon) {
    return <p>Carregando...</p>;
  }

  const name = pokemon.name.toUpperCase()

  return (
    <div>
      <Image src={pokemon.image} width={300} height={300} alt={pokemon.name} />
      <h2>Olá eu sou o pokemon {name}!</h2>
    </div>
  );
}
