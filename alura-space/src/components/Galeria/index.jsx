import React from 'react'
import Tags from '../tags'
import styles from './Galeria.module.scss'

export default function Galeria() {
  return (
    <div className={styles.galeriaImg}>
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className={styles.galeria__lista}></ul>
        </section>
    </div>
  )
}
