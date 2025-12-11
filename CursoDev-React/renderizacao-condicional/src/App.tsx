import Dashboard from './components/Dashboard'
import Badge from './components/Exercicio1'
import Card from './components/Exercicio2'
import Price from './components/Exercicio3'
import './App.css'

function App() {

  return (
    <>
      {/* <Dashboard username="Ricardo"></Dashboard>
      <Dashboard username={null}></Dashboard> */}

      {/* <Badge text='Seja Bem-Vindo'/>
      <Badge text='Olá, João'/>
      <Badge/> */}

      {/* <Card photo='https://placecats.com/neo/300/200' title='Gato Listrado'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos in fugiat quas laudantium quo consequatur quod ullam dolore ea omnis quia, cum magni eos repellat porro vel numquam dicta.</p>
      </Card>
      <Card title='Card'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem animi perferendis quisquam eligendi veritatis officia ea. Dolorum possimus, maxime cumque culpa sint excepturi, tempore id explicabo reiciendis dolorem asperiores.</p>
      </Card>
      <Card photo='https://placecats.com/300/200' title='2 Gatos'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto natus, nostrum quibusdam commodi quasi voluptas, quis molestiae ipsum itaque eligendi odit? Nisi soluta dolor animi, ipsa aliquam nemo accusantium.</p>
      </Card> */}

      <Price name='Calça' price={89.99}></Price>
      <Price name='Par de meias' price={15.00} promoPrice={10.00}></Price>
      <Price name='Camiseta' price={100.00} promoPrice={60.00}></Price>
    </>
  )
}

export default App
