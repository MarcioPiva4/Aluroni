import styles from "./Prato.module.scss";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import cardapio from "data/cardapio.json";
import Tags from "Components/Tags";
import NotFound from "pages/NotFound";
import Header from "Components/Header";

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find((item) => item.id === Number(id));
  if (!prato) {
    return <NotFound></NotFound>;
  }
  return (
    <>
      <Routes>
        <Route path="*" element={<Header></Header>}>
          <Route
            index
            element={
              <>
                {" "}
                <button className={styles.voltar} onClick={() => navigate(-1)}>
                  {"< voltar"}
                </button>
                <section className={styles.container}>
                  <h1 className={styles.titulo}>{prato.title}</h1>
                  <div>
                    <img src={prato.photo} alt={prato.title}></img>
                  </div>
                  <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                      {prato.description}
                    </p>
                    <Tags {...prato}></Tags>
                  </div>
                </section>
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
