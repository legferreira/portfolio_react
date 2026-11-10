import CardProjeto from "./CardProjeto";

function Academicos({ projetosAcademicos }) {
  return (
    <section id="academicos" className="secao">
      <h2>Projetos acadêmicos</h2>
      <div className="grade-projetos grade-academicos">
        {projetosAcademicos.map((projeto) => (
          <CardProjeto
            key={projeto.titulo}
            projeto={projeto}
            rotulo="Faculdade"
            academico
          />
        ))}
      </div>
    </section>
  );
}

export default Academicos;
