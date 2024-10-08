import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
    nome: string;
    tipo: string | string [];
    fraqueza: string | string [];
  }
export default function Card({ nome, tipo, fraqueza }: CardProps) {
    return (
    <section className={styles.container}>
      <Image src="" alt=""></Image>
      <h3>Nome: {nome}</h3>
      <h3>Tipo: {tipo}</h3>
      <h3>Fraqueza: {fraqueza}</h3>
    </section>
  );

}
