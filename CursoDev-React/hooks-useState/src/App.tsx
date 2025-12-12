import { useState } from 'react'
import './App.css'
import MyInput from './components/Myinput'
import PasswordInput from './components/PasswordInput'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  /* const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  const resetCount = () => {
    setCount(0);
  } */

 /*  const counter = () => {
    setCount(prev => prev + 1);
  } */



  return (
    <>
      {/* <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar contador</button>
      <button onClick={decrement}>Decrementar contador</button>
      <button onClick={resetCount}>Resetar contador</button> */}

      {/* <MyInput></MyInput> */}

      {/* <p>Número de Likes: {count}</p>
      {count >= 10 ? (<p>Você está curtindo muito! 😎</p>) : null}
      <button onClick={counter}>Like</button> */}

      {/* <PasswordInput/> */}

      <TodoList/>
    </>
  )
}

export default App

/* ✅ Exercício 1 — Contador de likes (fácil)

Crie um componente LikeButton que:
  Mostra um número de likes
  Começa em 0
  Ao clicar no botão, aumenta +1
  Quando chegar a 10 likes, exibe a mensagem:
  "Você está curtindo muito! 😎"
👉 Dica: você vai usar um estado numérico e um condicional simples. */

/* ✅ Exercício 2 — Mostrar/Esconder senha (médio)
  Crie um componente PasswordInput que:
  Tem um input de senha
  Tem um botão “Mostrar senha”
  Quando o botão é clicado, alterna entre:
    type="password"
    type="text"
👉 Dica: use um estado booleano.
Pense como um interruptor de luz (liga/desliga). */

/* ✅ Exercício 3 — Lista dinâmica de tarefas (difícil — vida real)

Crie um componente TodoList que:
  Tem um input
  O usuário digita uma tarefa e clica em “Adicionar”
  A tarefa entra em uma lista
  Cada tarefa deve ter um botão ❌ para remover
  A lista deve ser renderizada dinamicamente
👉 Dicas importantes:
  Precisará de um estado array
  Usar o padrão:
    setLista([...lista, novaTarefa])
  Para remover, use filter()
  Para renderizar, use .map() */