import React from "react";
import Tags from "../tags";
import style from "./Galeria.module.scss";
import fotos from "./fotos.json";
import Cards from "./cards";

export default function Galeria() {
  return (
    <section className={style.galeria}>
      <div className={style.galeriaImg}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards itens={fotos} style={style} />
      </div>
    </section>
  );
}