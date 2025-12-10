import Dashboard from './components/Dashboard'
import './App.css'

function App() {

  return (
    <>
      <Dashboard username="Ricardo"></Dashboard>
      <Dashboard username={null}></Dashboard>
    </>
  )
}

export default App
