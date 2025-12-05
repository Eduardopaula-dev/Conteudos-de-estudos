import './App.css'

function App() {
  /* const name = "Ricardo"
  const nameExercicio = "Maria"
  const message = "Hoje é um ótimo dia para programar React!" */

  const tech = ["HTML", "CSS", "JavaScript"]

  return (
    <>
      {/* Código da Aula Dev Em Dobro
      <section>
        <h1>Hello, {name}</h1>
        <p>Seja Bem-vindo</p>
      </section> */}

      {/* Exercicio 1
      <section>
        <h1>Olá, {nameExercicio}!</h1>
        <p>{message}</p>
      </section> */}

      <p>Minhas tecnologias favoritas:</p>
      <ul>
        <li>{tech[0]}</li>
        <li>{tech[1]}</li>
        <li>{tech[2]}</li>
      </ul>
    </>
  )
}

export default App


/* 🧪 Exercício 1 — Saudação dinâmica

📌 Regras:

Crie uma variável name com outro nome diferente do anterior
Crie uma variável message com uma frase
Mostre tudo usando JSX no <h1> e <p>
Estilize via CSS importado (como já fez com App.css)

📌 Resultado esperado no navegador (exemplo):

Olá, Maria!
Hoje é um ótimo dia para programar React!

➡️ Apenas texto, mas usando duas variáveis dentro do JSX. */

/* 🧪 Exercício 2 — Lista simples de tecnologias

📌 Regras:

Crie uma constante chamada tech1, tech2, tech3 com três tecnologias que você gosta

Exiba as três dentro de uma lista (<ul> e <li>)

Tudo dentro do componente App

📌 Exemplo de resultado visual:

Minhas tecnologias favoritas:
• HTML
• CSS
• React


➡️ Sem arrays, sem map, sem nada avançado — só o que você já sabe.

🎯 Objetivo desses exercícios
Habilidade	Onde será usada
Variáveis	const ...
JSX com conteúdo dinâmico	{} no HTML
Agrupar elementos com fragmentos	<>...</>
Estruturação de conteúdo	<h1>, <p>, <ul>, <li>
Organização visual	import './App.css' */