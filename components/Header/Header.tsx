import Image from "next/image"
import styles from "./Header.module.css"

interface HeaderProps {
    titulo: string,
    subtitulo1?: string
    subtitulo2?: string
}

export default function Header({ titulo, subtitulo1, subtitulo2 }: HeaderProps)  {
    return <div className={styles.container}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <Image
            src="/Logo.png"
            alt="Nome Pokemon"
            width={500}
            height={200}
        ></Image>
        <p>
            {subtitulo1}
        </p>
        <p>{subtitulo2}</p>
    </div>
}


