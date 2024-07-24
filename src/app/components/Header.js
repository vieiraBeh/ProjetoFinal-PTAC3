import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header(){
    return(
        <header className={styles.cabecalho}>

            <Link href="/">
            <Image className={styles.imagem} 
            width={100}
            height={100}
            src={"https://static.vecteezy.com/ti/vetor-gratis/p1/10254253-sv-initial-wedding-monogram-logo-vetor.jpg"}
            />
            </Link>

            <nav>
                <div>
                <ul className={styles.lista}>
                <li className={styles.titulo}>Joias Vieira Stein</li>
                    <li className={styles.frase}>Joias para todos os gostos e estilos!</li>

                    <li>
                    <Link href="/">
                    <Image className={styles.imagem} 
                    width={30}
                    height={30}
                    src={"https://cdn-icons-png.freepik.com/256/2331/2331970.png?ga=GA1.1.1951763371.1721594187&semt=ais_hybrid"}
                    />    
                    </Link>

                    <button className = {styles.button}>ADD</button>
                    </li>
                </ul>
                </div>        
            </nav>
        </header>
    );
}