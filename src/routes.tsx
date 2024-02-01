import React from "react";
import Inicio from "pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cardapio from "pages/Cardapio";
import Menu from "Components/Menu";
import Header from "Components/Header";
import Sobre from "pages/Sobre";
import Footer from "Components/Footer";
import NotFound from "pages/NotFound";
import Prato from "pages/Prato";

function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Header></Header>}>
            <Route index element={<Inicio></Inicio>} ></Route>
            <Route path="cardapios" element={<Cardapio></Cardapio>}></Route>
            <Route path="sobre" element={<Sobre></Sobre>}></Route>
          </Route>
          <Route path="prato/:id" element={<Prato></Prato>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </main>
  );
}

export default AppRouter;
