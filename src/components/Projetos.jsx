import CardProjeto from "./CardProjeto";

function Projetos({ projetos }) {
  return (
    <section id="projetos" className="secao">
      <h2>Projetos e atuação</h2>
      <div className="grade-projetos">
        {projetos.map((projeto, i) => (
          <CardProjeto
            key={projeto.titulo}
            projeto={projeto}
            rotulo={String(i + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
