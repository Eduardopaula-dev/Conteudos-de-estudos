import { useState } from 'react'
import './App.css'
import MyInput from './components/Myinput'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  const resetCount = () => {
    setCount(0);
  }



  return (
    <>
      {/* <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar contador</button>
      <button onClick={decrement}>Decrementar contador</button>
      <button onClick={resetCount}>Resetar contador</button> */}

      <MyInput></MyInput>
    </>
  )
}

export default App
