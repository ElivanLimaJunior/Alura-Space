import React from 'react';
import styles from './banner.module.scss';
import banner from './banner.png';
import Menu from '../menu';

export default function Banner() {
  return (

            <div className={styles.principal__imagem}>
                <h1>
                    A galeria mais completa do espaço
                </h1>
                <img src={banner} alt="A terra vista do espaço" />
            </div>
  )
}
