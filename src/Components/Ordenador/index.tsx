import React, { useState } from "react";
import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import classNames from "classnames";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ordenador, setOrdenador}: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== "",
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar Por:'}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20}></MdKeyboardArrowUp>
      ) : (
        <MdKeyboardArrowDown size={20}></MdKeyboardArrowDown>
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map((e) => (
          <div className={styles.ordenador__option} key={e.value} onClick={() => setOrdenador((e.value))}>
            {e.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
