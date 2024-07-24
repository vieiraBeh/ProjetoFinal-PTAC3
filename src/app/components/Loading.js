import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading(){
    return(
        <div className={styles.container}>
            <Image
                width={50}
                height={50}
                src="/loading.gif"
                alt="Imagem carregando"
                className={styles.image}
            />
        </div>
    );
}
