/* 🧩 Exercício 1 – “Card genérico com conteúdo dinâmico”

Nível: Fácil/Médio

📌 Objetivo: Criar um componente Card que recebe qualquer conteúdo via children.

No componente pai:
Renderizar 3 <Card> diferentes
Cada um com conteúdos diferentes dentro do children:
    Um título
    Um parágrafo
    Um botão
Requisitos do Card:
    Uma borda
    Padding interno
    Usar children para mostrar o conteúdo inserido dentro do componente
💡 Dicas:
Você terá algo do tipo:
<Card>
  <h2>Algum conteúdo</h2>
</Card>

Tipagem recomendada:
children: React.ReactNode */

import "./style.css"

type CardProps = {
    children: React.ReactNode
}

const Card2 = ({children}: CardProps) => {
    return (<div className="card2">
        {children}
    </div>
    )
}

export {Card2}

