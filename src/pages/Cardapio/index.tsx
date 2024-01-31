import Buscador from "Components/Buscador";
import styles from "./Cardapio.module.scss";

import { ReactComponent as Logo } from "assets/logo.svg";
import Header from "Components/Header";
import { useState } from "react";
import Filtros from "Components/Filtros";
import Ordenador from "Components/Ordenador";
import Itens from "Components/Itens";

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return (
    <main>
      <nav className={styles.menu}>
        <Logo></Logo>
      </nav>
      <Header></Header>
      <section className={styles.cardapio}>
        <h1 className={styles.cardapio__titulo}>Cardápio</h1>
        <Buscador busca={busca} setBusca={setBusca}></Buscador>
        <div className={styles.cardapio__filtros}><Filtros filtro={filtro} setFiltro={setFiltro}></Filtros></div>
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}></Ordenador>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador}></Itens>
      </section>
    </main>
  );
}
