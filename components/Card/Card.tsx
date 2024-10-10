import Image from "next/image";
import styles from "./Card.module.css";
import { MouseEventHandler } from "react";
import Link from "next/link";

interface CardProps {
  nome: string;
  tipo: string | string[];
  fraqueza: string | string[];
  imagem: string;
  id: number;
}
export default function Card({
  nome,
  tipo,
  fraqueza,
  imagem,
  id,
}: CardProps) {
  return (
    <section className={styles.container}>
      <div className={styles.esquerda}>
      <Link href={`/ataque/${id}`}>
          <Image src={imagem} alt="Pokemon" width={100} height={100}></Image>
        </Link>
      </div>
      <div className={styles.direita}>
        <p>
          <b>Nome:</b> {nome}
        </p>
        <p>
          <b>Tipo:</b> {tipo}
        </p>
        <p>
          <b>Fraqueza:</b> {fraqueza}
        </p>
      </div>
    </section>
  );
}
