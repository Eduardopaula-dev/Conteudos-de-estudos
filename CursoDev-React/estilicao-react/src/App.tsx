import './App.css'
import { BotaoExterno } from './components/BotaoExterno'
import { BotaoModule } from './components/BotaoModule'
import { BotaoStyled } from './components/BotaoStyled'

function App() {

  return (
    <>
      <BotaoExterno></BotaoExterno>

      <button className='my-button'>Clique aqui - Botão externo 2</button>

      <BotaoModule></BotaoModule>

      <button className='myButton'> Botão Module 2</button>

      <BotaoStyled></BotaoStyled>
    </>
  )
}

export default App
