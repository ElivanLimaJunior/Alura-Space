import React from 'react'
import style from './FotosPopulares.module.scss'
import fotoPopular from './fotos-populares.json'

export default function FotosPopulares() {
  return (
    <aside className={style.populares}>
        <h2>Populares</h2>
        <ul className={style.populares__imagens}>
          {fotoPopular.map((fotoPopular) => {
            return (
              <li key={fotoPopular.id}>
                <img src={fotoPopular.path} alt={fotoPopular.alt} />
              </li>    
            )
          })}
        </ul>
        <button> Ver mais fotos</button>
    </aside>
  )
}
