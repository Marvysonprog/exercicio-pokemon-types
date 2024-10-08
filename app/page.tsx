import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header titulo="Boas vindas ao Mundo Pokemon" subtitulo1="Nesta página iremos conhecer alguns pokemons, seus tipos e suasfraquezas." subtitulo2="Espero que se divirta nessa experiência única."/>
      <Link href="./listaPokemons" className={styles.nav}>Clique aqui para acessar a lista de pokemons.</Link>
    </>
  );
}
