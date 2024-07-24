import { listaDeJoias } from "../api/route";
import Link from "next/link";
import Image from "next/image";
import styles from "./main.module.css"

export default function Main (){
    return(
        <main className={styles.main}>
        {listaDeJoias.map((joia) =>
          <div key={joia.id}>
            <p>{joia.titulo}</p>
            <Image src={joia.image}
              width={100}
              height={100} alt="joia image" />
            <p>{joia.preco} R$</p>
            <p>{joia.descricao}</p>
            <p>{joia.colecao}</p>
            <button >
              <Link href={`/joia/${joia.id}`}>Ver mais</Link>
            </button>
          </div>
        )};
      </main>
    );
}