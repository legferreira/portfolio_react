function Inicio({ nome, cargo, introducao }) {
  return (
    <section id="inicio" className="inicio">
      <p className="saudacao">Olá, eu sou</p>
      <h1>{nome}</h1>
      <p className="cargo">{cargo}</p>
      <p className="introducao">{introducao}</p>
    </section>
  );
}

export default Inicio;
