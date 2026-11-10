function Contatos({ contatos }) {
  return (
    <section id="contato" className="secao">
      <h2>Contatos</h2>
      <p className="contato-texto">Fique à vontade para me chamar nas redes abaixo.</p>
      <div className="contatos">
        {contatos.map((contato) => (
          <a
            key={contato.nome}
            href={contato.link}
            target="_blank"
            rel="noopener"
            className="contato"
          >
            <img src={contato.icone} alt={contato.nome} />
            <span>{contato.nome}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contatos;
