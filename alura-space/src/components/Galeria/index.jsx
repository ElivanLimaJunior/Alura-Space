import React from "react";
import Tags from "../tags";
import style from "./Galeria.module.scss";
import fotos from "./fotos.json";
import Cards from "./cards";
import { useState } from "react";

export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((valor) => valor.tag))]

  const filtrarFotos = (tag) => {
    const fotosFiltradas = fotos.filter((foto) => {
      return foto.tag === tag;
    })

    setItens(fotosFiltradas)
  }

  

  return (
    <section className={style.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
        <Cards itens={itens} style={style} />
    </section>
  );
}