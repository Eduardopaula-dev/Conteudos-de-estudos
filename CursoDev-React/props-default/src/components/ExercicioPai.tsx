import { NewGreeting, NewProducts, NewCard } from "./ExercicioFilho";

const Greeting = () => {
    return (
        <div>
            <NewGreeting nome="João"/>
            <NewGreeting/>
        </div>
    )
}

export {Greeting}

const Product = () => {
    return (
        <div>
            <NewProducts name="Camiseta" price={69.99}/>
            <NewProducts name="Short" price={45.99}/>
            <NewProducts name="Calça"/>
        </div>
    )
}

export {Product}


const Card = () => {
    return (
        <div>
            <NewCard name="João" age={21}/>
        </div>
    )
}

export {Card}