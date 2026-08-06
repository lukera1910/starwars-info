# 🌌 Star Wars Archive Terminal

> *"A long time ago in a galaxy far, far away..."*

Uma wiki interativa do universo Star Wars, construída com visual de terminal futurista e dados reais vindos da [SWAPI](https://swapi.dev) — a API pública mais completa sobre a saga.

---

## ✨ O que você vai encontrar aqui

O projeto funciona como um **"banco de dados Jedi"**, onde você pode explorar:

| Categoria | O que tem |
|---|---|
| 🪐 **Planetas** | Dados sobre os mundos da galáxia (clima, terreno, população...) |
| 🚀 **Naves** | Especificações técnicas das naves interestelares |
| 🚘 **Veículos** | Transportes terrestres que aparecem nos filmes |
| 👦🏻 **Pessoas** | Perfis dos personagens da saga |
| 🎬 **Filmes** | Informações sobre cada episódio |
| 👽 **Espécies** | Taxonomia das raças da galáxia |

Cada seção tem **paginação** para navegar pelos resultados, e os cards foram pensados para exibir as informações de forma clara e organizada.

---

## 🛠️ Tecnologias

- **[React 19](https://react.dev/)** — componentes, hooks, tudo que a gente ama
- **[Vite 7](https://vite.dev/)** — bundler ultra rápido para desenvolvimento
- **[React Router DOM v7](https://reactrouter.com/)** — navegação entre as páginas
- **[Tailwind CSS v4](https://tailwindcss.com/)** — estilização com classes utilitárias
- **[SWAPI](https://swapi.dev/)** — a API de dados do universo Star Wars

---

## 🚀 Rodando localmente

Você vai precisar do [Node.js](https://nodejs.org/) instalado na sua máquina.

```bash
# Clone o repositório
git clone https://github.com/lukera1910/starwars-info.git

# Entre na pasta
cd starwars-info

# Instale as dependências
npm install

# Suba o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) e que a Força esteja com você. 🤙

---

## 📁 Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (cards, tabelas, paginação)
├── pages/            # Uma página para cada categoria da SWAPI
├── utils/            # Funções auxiliares (ex: conversão de unidades)
├── App.jsx           # Configuração das rotas
└── main.jsx          # Ponto de entrada da aplicação
```

---

## 🎨 Visual

O projeto tem uma estética de **terminal cyberpunk** — fundo escuro (`slate-950`), texto em ciano, efeitos de glow nos hovers e tipografia monoespaçada. A ideia é parecer que você está acessando um sistema secreto da Ordem Jedi.

---

*Dados fornecidos por [swapi.dev](https://swapi.dev) • Projeto sem fins comerciais*
