import Card from './components/Card'
import { Card2 } from './components/exercicios1'
import HighlightCard from './components/exercicio2'
import Avatar from './components/Exercicio3'
import './App.css'

function App() {


  return (
    <>
      {/* <Card>
      <h2>Título do cartão</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum exercitationem voluptates, sit in consectetur dicta nulla quidem repudiandae ex praesentium minus eaque. Aspernatur ad culpa consectetur cupiditate dolore ducimus?</p>
     </Card>
     <Card/> */}

      {/* <Card2>
      <h2>Card 1</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa mollitia facere eum, aut voluptatum, voluptate placeat sit dolore nostrum iure qui corporis? Molestias sequi pariatur nesciunt obcaecati iste eius reprehenderit.</p>
     </Card2>

     <Card2>
      <h2>Card 2</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa mollitia facere eum, aut voluptatum, voluptate placeat sit dolore nostrum iure qui corporis? Molestias sequi pariatur nesciunt obcaecati iste eius reprehenderit.</p>
     </Card2>

     <Card2>
      <h2>Card 3</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa mollitia facere eum, aut voluptatum, voluptate placeat sit dolore nostrum iure qui corporis? Molestias sequi pariatur nesciunt obcaecati iste eius reprehenderit.</p>
     </Card2> */}

      {/* <HighlightCard title="Lista de Supermercado">
        <ul>
          <li>Pão</li>
          <li>Feijão</li>
        </ul>
      </HighlightCard>

      <HighlightCard title="Título + Parágrafo">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </HighlightCard>

      <HighlightCard title="Texto em Destaque">
        <strong>Lorem ipsum dolor sit amet consectetur...</strong>
      </HighlightCard> */}

      <Avatar name='João'/>
      <Avatar photo='https://placecats.com/neo/300/200' name='Paulo'/>
      <Avatar photo='https://placecats.com/millie/300/150' name='Juliana'/>
    </>
  )
}

export default App
