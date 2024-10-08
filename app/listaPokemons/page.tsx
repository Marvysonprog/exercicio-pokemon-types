"use client";

import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Pokemon } from "../../src/db/pokemons";
import styles from "./page.module.css";

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
      <div className={styles.header}>
        <h1>Lista de Pokemons</h1>
        <p>Confira aqui todos os pokemons disponíveis</p>
      </div>
      {dados.map((pokemon) => {
        return <Card
          key={pokemon.id}
          nome={pokemon.name}
          tipo={pokemon.types}
          fraqueza={pokemon.weaknesses.map((item) =>  {return item + " "})}
        ></Card>;
      })}
    </>
  );
}
