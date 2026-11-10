// Card reutilizado nas seções de projetos e de projetos acadêmicos
function CardProjeto({ projeto, rotulo, academico }) {
  return (
    <article className={academico ? "card projeto academico" : "card projeto"}>
      <span className="numero">{rotulo}</span>
      <h3>{projeto.titulo}</h3>
      <p>{projeto.descricao}</p>
      <div className="tags">
        {projeto.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {projeto.link && (
        <a className="ver-projeto" href={projeto.link} target="_blank" rel="noopener">
          Ver no GitHub →
        </a>
      )}
    </article>
  );
}

export default CardProjeto;
