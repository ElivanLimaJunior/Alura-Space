import Banner from "../../components/banner";
import styles from '../../components/banner/banner.module.scss';

import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/menu";
import Rodape from '../../components/rodape'
import Galeria from "../../components/Galeria";
import FotosPopulares from "../../components/FotosPopulares"

export default function PaginaInicial() {
    return (
      <>
        <Cabecalho />
        <main>
          <section className={styles.principal}>
            <Menu />
            <Banner />
          </section>
          <div className={styles.galeria}>
            <Galeria />
            <FotosPopulares />
          </div>
        </main>

        <Rodape />
      </>
    );
}