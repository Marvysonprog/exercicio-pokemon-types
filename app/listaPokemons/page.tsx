"use client";

import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Pokemon } from "../../src/db/pokemons";
import styles from "./page.module.css";
import Header from "../../components/Header/Header";
import Link from "next/link";

export default function ListaPokemons() {
  const [dados, setDados] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/api/pokemons")
      .then((response) => response.json())
      .then((data) => setDados(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <>
      <Header titulo="Lista de Pokemons" subtitulo1="Confira aqui todos os pokemons disponíveis"/>
      {dados.map((pokemon) => {
      
        return <Card
          id={pokemon.id}
          nome={pokemon.name}
          tipo={pokemon.types}
          fraqueza={pokemon.weaknesses.map((item) => { return item + " " })}
          imagem = {pokemon.image}
          
        />;
      })}
    </>
  );
}
