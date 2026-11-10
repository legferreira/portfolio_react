// Ano atual, calculado uma vez quando a página carrega
const ano = new Date().getFullYear();

function Rodape({ nome }) {
  return (
    <footer>
      <p>
        Desenvolvido por <strong>{nome}</strong> &middot; <span>{ano}</span>
      </p>
    </footer>
  );
}

export default Rodape;
