/* 🧩 Exercício 2 — Card com Imagem Opcional (médio)

🎯 Objetivo:
Criar um card que só mostra a imagem se a prop existir.

📝 Regras:
Props: title: string, image?: string, children: ReactNode
Se image existir → mostrar <img>
Se não existir → mostrar apenas título + conteúdo
No pai:
    1 card com imagem
    1 card sem imagem
    1 card com imagem e texto diferente
💡 Dica:
Pergunte a si mesmo:
Onde a imagem deve aparecer dentro do card? No topo?
Isso influencia onde o JSX condicional fica. */

type CardProps = {
    photo?: string;
    title: string;
    children: React.ReactNode
}

const Card = ({ photo, title, children }: CardProps) => {
    return (
        <div>
            {photo ? (
                <img src={photo} alt={title} />
            ) : null}
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Card