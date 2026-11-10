# Portfólio Leticia Ferreira

Portfólio pessoal em **React** com **Vite**, criado a partir do portfólio em HTML, CSS e JavaScript feito no início do semestre e hospedado na **Vercel**.

## Funcionalidades

* Página única com as seções Home, Sobre, Projetos, Acadêmicos e Contatos
* Stacks do curso de Sistemas de Informação da UMC organizadas por área
* Menu fixo que destaca a seção atual
* Botão de voltar ao topo e animação de entrada dos cards
* Layout responsivo com menu recolhível no celular

## Estrutura

```
public/img/                   ícones do LinkedIn e GitHub
src
├── main.jsx                  ponto de entrada do React
├── App.jsx                   monta a página juntando os componentes
├── dados.js                  todos os textos do portfólio
├── index.css                 estilos (mesmo layout da versão anterior)
└── components/
    ├── Header.jsx            menu fixo e menu do celular
    ├── Inicio.jsx            apresentação
    ├── Sobre.jsx             sobre mim, habilidades e stacks
    ├── CardProjeto.jsx       card reutilizado nos projetos
    ├── Projetos.jsx          projetos e atuação
    ├── Academicos.jsx        projetos acadêmicos
    ├── Contatos.jsx          LinkedIn e GitHub
    ├── Rodape.jsx            rodapé com o ano atual
    └── VoltarTopo.jsx        botão de voltar ao topo
```

## Do Thymeleaf para o React

| Versão Spring Boot + Thymeleaf        | Versão React                          |
|---------------------------------------|---------------------------------------|
| `HomeController` envia os dados       | `dados.js` exporta os dados           |
| `th:text="${nome}"`                   | `{nome}`                              |
| `th:each="projeto : ${projetos}"`     | `projetos.map((projeto) => ...)`      |
| `templates/index.html`                | componentes em `src/components`       |
| `static/js/script.js`                 | `useState` e `useEffect`              |

## Como rodar

Pré requisito: Node.js instalado.

```
npm install
npm run dev
```

Depois acessar o endereço que aparece no terminal, geralmente http://localhost:5173
