import "./Card.css"

type CardProps = {
    children?: React.ReactNode;
}

const Card = ({children}: CardProps) => {
    return <div className="card">
        {children || <p>Nenhum conteúdo disponível</p>}
    </div>
}

export default Card