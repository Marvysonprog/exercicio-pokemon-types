import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Boas vindas ao Mundo Pokemon</h1>
        <Image
          src="/Logo.png"
          alt="Nome Pokemon"
          width={500}
          height={200}
        ></Image>
        <p>
          Nesta página iremos conhecer alguns pokemons, seus tipos e suas
          fraquezas.
        </p>
        <p>Espero que se divirta nessa experiência única.</p>
      </div>
      <Link href="./listaPokemons" className={styles.nav}>Clique aqui para acessar a lista de pokemons.</Link>
    </>
  );
}
