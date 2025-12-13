import { Todo } from './components/TodoList'
import { ColorList } from './components/Colors'
import { TodoExercise } from './components/TodoListExercise'
import { UserList } from './components/ObjectsList'
import './App.css'

function App() {


  return (
    <>
      {/* <Todo/> */}

      {/* <ColorList /> */}

      {/* <TodoExercise/> */}

      <UserList/>
    </>
  )
}

export default App


/* 🧩 Exercício 1 — Lista de cores (bem fácil)

🎯 Objetivo: Renderizar uma lista simples na tela.

📌 Regras:
  Crie um estado que guarda uma lista de cores (strings)
  Exemplo de valores: "Vermelho", "Azul", "Verde"
  Mostre essas cores em uma <ul>
  Cada cor deve aparecer em um <li>
💡 Dicas:
  O estado vai ser um array
  Use .map() para renderizar
  Pense: “para cada cor, crio um <li>” */

/* 🧩 Exercício 2 — Lista de tarefas simples

🎯 Objetivo: Trabalhar com lista de textos.
  
📌 Regras:
  Crie um estado com uma lista de tarefas
  Exemplo: "Estudar React", "Praticar JSX", "Dormir"
  Mostre as tarefas na tela
  Use < ol > ao invés de<ul>
💡 Dicas:
  Não precisa adicionar nem remover itens
  Só mostrar a lista
  Preste atenção no key do .map() */

/* 🧩 Exercício 3 — Lista de usuários (um pouco mais de atenção)

🎯 Objetivo: Renderizar uma lista de objetos simples.
  
📌 Regras:
  O estado deve ser uma lista de objetos
  Cada objeto tem:
    name (string)
  Renderize:
    Um <p> para cada usuário
    Mostrando o nome dele
💡 Dicas:
  O map agora vai acessar user.name
  Pense:
  “estou repetindo um bloco JSX para cada usuário” */