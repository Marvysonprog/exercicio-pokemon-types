import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  nome: string;
  tipo: string | string[];
  fraqueza: string | string[];
  imagem: string
}
export default function Card({ nome, tipo, fraqueza, imagem }: CardProps) {
  return (
    <section className={styles.container}>
      <div className={styles.esquerda}>
      <Image src={imagem} alt="Pokemon" width={100} height={100}></Image>
      </div>
      <div className={styles.direita}>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Tipo:</b> {tipo}</p>
        <p><b>Fraqueza:</b> {fraqueza}</p>
      </div>
    </section>
  );

}
