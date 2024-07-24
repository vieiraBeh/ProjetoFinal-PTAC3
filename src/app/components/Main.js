'use client'

import { useState, useEffect } from "react";
import { listaDeJoias } from "../api/route";
import Link from "next/link";
import Image from "next/image";
import styles from "./main.module.css";
import Loading from "./Loading";

export default function Main (){
    const [listJoia, setListJoia] = useState([]);
    const [listComplete,setListComplete] = useState([]);
    const [search,setSearch] = useState("");
    const [errorFetch,setErrorFetch] = useState(false);
  
    useEffect(() => {
      const getJoia = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/");
          const data = await response.json();
          setListJoia(data);
          setListComplete(data);
        } catch {
          setErrorFetch(true);
        }
      };
      getJoia();
    }, []);

    const searchText = (text) => {
        setSearch(text);
    
        if (text.trim() == ""){
          setListJoia(listComplete);
          return
        }
    
        const newList =  listJoia.filter((joia) => 
          joia.titulo.toUpperCase().trim().includes(search.toUpperCase().trim())
        );
        setListJoia(newList);   
      }
    
      if (errorFetch == true){
        return( 
        <p>erro</p>
      );
      }

      if (listComplete[0] == null) {
        return (
        <main>
        <Loading/>
        </main>
        );
      }
    
    
    return(
        <>
         <div>
        <input type = "text" value={search} placeholder="Pesquise o produto" onChange={(event) => searchText(event.target.value)}/>
        </div>

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
      </>
    );
}