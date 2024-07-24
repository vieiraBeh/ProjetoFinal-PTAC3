import { NextResponse } from "next/server";

export const listaDeJoias = [
    {
        id: 100,
        titulo: "Colar solitário Lifa em prata 925 ",
        descricao: "Colar solitário Lifa em prata 925 com pedra incolor 40cm",
        preco: 530,
        colecao: "Solitários",
        material: "Prata",
        image: "https://lojavivara.vtexassets.com/arquivos/ids/859945/Colar-Solitario-Life-em-Prata-925-com-Pedra-Incolor-40cm-98451_3_set.jpg?v=638515527700370000"
    },
    {
        id: 110,
        titulo: "Pulseira petit ",
        descricao: "Pulseira petit coração em prata 925 com topázio incolores",
        preco: 690,
        colecao: "Petit prata",
        material: "Prata",
        image: "https://lojavivara.vtexassets.com/arquivos/ids/777147/Pulseira-Petit-Coracao-em-Prata-925-com-Topazios-Incolores-408_1_set.jpg?v=638437347757900000"
    },
    {
        id: 120,
        titulo: "Anel solitário em Ouro",
        descricao: "Anel Solitário Clássico em Ouro Branco 18k com diamante 1,50 ct",
        preco: 790,
        colecao: "Solitario classic",
        material: "Ouro branco",
        image: "https://lojavivara.vtexassets.com/arquivos/ids/765866/Anel-Solitario-Classic-em-Ouro-Branco-18k-com-Diamante-1-50-ct-61069_1_set.jpg?v=638437319747600000"
    },
    {
        id: 130,
        titulo: "Argola life prata",
        descricao: "Argola life glam prata cravejado 18 mm",
        preco: 590,
        colecao: "Glam",
        material: "Prata",
        image: "https://lojavivara.vtexassets.com/arquivos/ids/802997/Argola-Life-Glam-Prata-Cravejado-18-mm-5945_1_set.jpg?v=638461394523530000"
    },
    {
        id: 140,
        titulo: "Tornozeleira",
        descricao: "Tornozeleira cravejada com zircônia",
        preco: 139,
        colecao: "clássico",
        material: "liga de zinco",
        image:"https://dreamjoias.com/cdn/shop/files/U44416b5176b24374afac9c3ab9f8408es_900x.webp?v=1704343432"
    },
    {
        id: 150,
        titulo: "Colar",
        descricao: "Colar coração delicado ouro 18k",
        preco: 129,
        colecao: "clássico",
        material: "Aço inoxidável",
        image: "https://dreamjoias.com/cdn/shop/files/He65c5b5af0e24252866ac9b749b1e822x_800x.webp?v=1704409445"
    },
    {
        id: 160,
        titulo: "Anel solitário",
        descricao: "Anel solitário noivado",
        preco: 374,
        colecao: "Clássico",
        material: "Prata 925 banhado a ouro 18k",
        image: "https://versalejoias.com/cdn/shop/files/AnelSolitarioNoivado_800x.webp?v=1704851136"
    },
    {
        id: 170,
        titulo: "Pulseira life",
        descricao:"Pulseira life mini me coração em liga rose com banho de ouro rosé 18k",
        preco: 200,
        colecao: "Mini me",
        material: "Liga rosé + banho de ouro rosé", 
        image: "https://lojavivara.vtexassets.com/arquivos/ids/861360/Pulseira-Life-Mini-Me-Coracao-em-Liga-Rose-com-Banho-de-Ouro-Rose-18k-73015_1_set.jpg?v=638518280516230000"
    },
    {
        id: 180,
        titulo: "Brinco argola",
        descricao: "Brinco argola perolado",
        preco: 149,
        colecao: "Clássico",
        material: "Aço inoxidavel",
        image: "https://dreamjoias.com/cdn/shop/files/S01356e990f9246759b1133ea52fb607aJ_800x.webp?v=1703278469"
    },
    {
        id: 190,
        titulo: "Gargantilha choker",
        descricao: "Gargantilha choker perolinhas e gota folheado em ouro 18k",
        preco: 105,
        colecao: "Clássico",
        material: "Ouro",
        image: "https://acdn.mitiendanube.com/stores/085/848/products/0b090f6d1dea574d60280c973f9d1fa6awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1678908333signature2bzs29bhmowefhjdaxthcivs4t343d-7d48eb1d6b41fe8bb316473723358784-1024-1024.webp"
    }
];

export async function GET(){
    return NextResponse.json(listaDeJoias)
}
