interface CardProps {
    titulo: string;
    descricao: string;
}

const NewCard = ({ titulo, descricao }: CardProps) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    )
}

export default NewCard