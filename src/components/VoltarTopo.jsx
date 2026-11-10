import { useEffect, useState } from "react";

function VoltarTopo() {
  const [visivel, setVisivel] = useState(false);

  // O botão só aparece depois de rolar um pouco a página
  useEffect(() => {
    function aoRolar() {
      setVisivel(window.scrollY > 400);
    }

    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <button
      className={visivel ? "voltar-topo visivel" : "voltar-topo"}
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}

export default VoltarTopo;
