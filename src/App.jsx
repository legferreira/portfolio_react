import { useEffect } from "react";
import * as dados from "./dados";

import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Academicos from "./components/Academicos";
import Contatos from "./components/Contatos";
import Rodape from "./components/Rodape";
import VoltarTopo from "./components/VoltarTopo";

function App() {
  // Animação: os cards aparecem quando entram na tela
  useEffect(() => {
    const elementos = document.querySelectorAll(".card, .habilidades li, .contato");

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elementos.forEach((elemento) => {
      elemento.classList.add("aparecer");
      observador.observe(elemento);
    });

    return () => observador.disconnect();
  }, []);

  return (
    <>
      <Header nome={dados.nome} />

      <main>
        <Inicio nome={dados.nome} cargo={dados.cargo} introducao={dados.introducao} />
        <Sobre sobre={dados.sobre} habilidades={dados.habilidades} stacks={dados.stacks} />
        <Projetos projetos={dados.projetos} />
        <Academicos projetosAcademicos={dados.projetosAcademicos} />
        <Contatos contatos={dados.contatos} />
      </main>

      <Rodape nome={dados.nome} />
      <VoltarTopo />
    </>
  );
}

export default App;
