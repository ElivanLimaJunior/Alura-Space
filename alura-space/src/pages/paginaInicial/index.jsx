import Banner from "../../components/banner";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/menu";
import styles from '../../components/banner/banner.module.scss';
import Rodape from '../../components/rodape'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                 <section className={styles.principal}>
                  <Menu />    
                 <Banner />
                 </section>
                 <Rodape />
            </main>
        </>
    )
}