import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.midia}>
            <ul className={styles.lista}>

                <li>
            <Link href="/">
                <Image 
            width={25}
            height={25}
            src={"https://cdn-icons-png.freepik.com/256/733/733614.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}
            />
            </Link>
            </li>

                <li>
            <Link href="/">
                <Image 
                 width={25}
                 height={25}
                 src={"https://cdn-icons-png.freepik.com/256/4494/4494464.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}
            />
            </Link>
            </li>

                <li>
            <Link href="/">
                <Image
                 width={25}
                 height={25}
                 src={"https://cdn-icons-png.freepik.com/256/14044/14044367.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}
            />
            </Link>
            </li>

                <li>
            <Link href="/">
                <Image 
                width={25}
                height={25}
                src={"https://cdn-icons-png.freepik.com/256/4401/4401471.png?ga=GA1.1.491756765.1717006945&semt=ais_hybrid"}
            />
            </Link>
            </li>
            <div className={styles.trecho}>
            <Link href="/" />
            <p>Copyright by Brenda Vieira & Luane Von Stein in 20/07/2024</p>
            </div>
            </ul>
            </div>  
        </footer>
    );
}