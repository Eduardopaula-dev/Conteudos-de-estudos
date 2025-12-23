import { useState, type ChangeEvent, type FormEvent, type KeyboardEvent } from 'react';
import './App.css'

function App() {
  /* const handleClick = (name: string) => {
    alert(`${name} clicou no botão`)
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log("A tecla pressionada foi:", event.key);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("O fomulário foi enviado")
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <>
      <button onClick={() => handleClick("Eduardo")}>Clique aqui</button>

      <input type="text" onKeyDown={handleKeyPress}/>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite algo..." onChange={handleChange}/>

        <button type='submit'>Enviar</button>
      </form>
    </>
  ) */

  /* const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> Passe o mouse aqui</button>

      {isHovering && <p>Mouse está sobre o botão</p>}
    </div>
  ) */

  const [status, setStatus] = useState("")

  const handlePressButton = () => {
    setStatus("Botão pressionado")
  }

  const handleReleaseButton = () => {
    setStatus("Botão Solto")
  }

  return (
    <div>
      <button onMouseDown={handlePressButton} onMouseUp={handleReleaseButton}>Segure o botão</button>

      <p>{status}</p>
    </div>
  )
}

export default App

/* 🧩 Exercício 1 — Botão de Destaque (fácil)

🎯 Objetivo:
Treinar onMouseEnter e onMouseLeave.

📌 Regras:
Crie um botão com o texto: “Passar o mouse”
Quando o mouse entrar no botão:
  Mostre um texto abaixo:
  👉 "Mouse está sobre o botão"
Quando o mouse sair:
  O texto deve desaparecer
💡 Dicas:
Use um useState boolean (true / false)
onMouseEnter → ativa o estado
onMouseLeave → desativa o estado
Use renderização condicional para mostrar o texto

🧠 Pense assim:
“Se o mouse está aqui, mostro a mensagem” */

/* 🧩 Exercício 2 — Botão de Pressionar e Soltar (médio)

🎯 Objetivo:
Entender a diferença entre onMouseDown e onMouseUp.

📌 Regras:
Crie um botão com o texto: “Segure o botão”
Quando o usuário pressionar o mouse:
  Mostrar o texto:
  👉 "Botão pressionado"
Quando o usuário soltar o mouse:
  Mostrar o texto:
  👉 "Botão solto"
💡 Dicas:
Um estado string pode facilitar ("pressionado" / "solto")
onMouseDown muda o estado
onMouseUp muda novamente
O texto exibido depende do estado atual
🧠 Analogia:
Como um controle de videogame: apertar ≠ soltar */