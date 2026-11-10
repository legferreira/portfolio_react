function Sobre({ sobre, habilidades, stacks }) {
  return (
    <section id="sobre" className="secao">
      <h2>Sobre mim</h2>
      <div className="card sobre-texto">
        {sobre.map((paragrafo, i) => (
          <p key={i}>{paragrafo}</p>
        ))}
      </div>

      <h3 className="subtitulo">Habilidades</h3>
      <ul className="habilidades">
        {habilidades.map((habilidade) => (
          <li key={habilidade}>{habilidade}</li>
        ))}
      </ul>

      <h3 className="subtitulo">Stacks do curso de Sistemas de Informação</h3>
      <div className="stacks">
        {stacks.map((grupo) => (
          <div className="card stack" key={grupo.area}>
            <h4>{grupo.area}</h4>
            <ul className="habilidades">
              {grupo.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sobre;
