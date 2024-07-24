import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default async function Joia({params}) {
    const response =  await fetch(`http://localhost:3000/api/${params.id}`);
    const data = await response.json();
    
    return(
        <>
        <div>
        <Header/>
        </div>
        <br/>
        <br/>

        <div className={styles.container}>   
        <h1 className={styles.title}>{data.titulo}</h1>
        <Image 
          src={data.image}
          width={100}
          height={100} 
          alt="data image" 
          className={styles.image} 
        />
        <h2 className={styles.price}>{data.preco} R$</h2>
        <p className={styles.description}>{data.descricao}</p>
        <p className={styles.collection}>{data.colecao}</p> 
    </div>
       <br/>
       <br/>
       <br/>
       <br/>
       <div>
           <Footer/>
       </div>
       </>

    );
}