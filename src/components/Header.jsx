import { useEffect, useState } from "react";

const links = [
  { id: "inicio", texto: "Home" },
  { id: "sobre", texto: "Sobre" },
  { id: "projetos", texto: "Projetos" },
  { id: "academicos", texto: "Acadêmicos" },
  { id: "contato", texto: "Contatos" },
];

function Header({ nome }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolando, setRolando] = useState(false);
  const [secaoAtual, setSecaoAtual] = useState("inicio");

  // Ao rolar a página: sombra no menu e link da seção atual destacado
  useEffect(() => {
    function aoRolar() {
      const posicao = window.scrollY;
      setRolando(posicao > 20);

      const secoes = document.querySelectorAll("section");
      let atual = "inicio";
      secoes.forEach((secao) => {
        if (posicao >= secao.offsetTop - 150) {
          atual = secao.id;
        }
      });

      // Se chegou no fim da página, marca a última seção (Contatos)
      if (window.innerHeight + posicao >= document.body.scrollHeight - 5) {
        atual = secoes[secoes.length - 1].id;
      }

      setSecaoAtual(atual);
    }

    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header id="topo" className={rolando ? "rolando" : ""}>
      <a href="#inicio" className="logo">
        {nome}
      </a>

      <button
        className="menu-botao"
        aria-label="Abrir menu"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        ☰
      </button>

      <nav className={menuAberto ? "aberto" : ""}>
        {links.map((link) => (
          <a
            key={link.id}
            href={"#" + link.id}
            className={secaoAtual === link.id ? "ativo" : ""}
            onClick={() => setMenuAberto(false)}
          >
            {link.texto}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
