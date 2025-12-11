/* 🧩 Exercício 1 — Badge de Status (simples)

🎯 Objetivo:
Criar um componente que mostra um texto somente se uma prop existir.

📝 Regras:
O componente recebe: text?: string
Se text existir → mostra o texto
Se text não existir → não mostra nada
No pai → criar 3 badges:
    um com texto
    um com outro texto
    um sem texto (para testar o "não renderizar")
💡 Dica:
Use a lógica:
prop && <elemento>...</elemento> */

type BadgeProps = {
    text?: string;
}

const Badge = ({ text }: BadgeProps) => {
    return (
        <>
            {text ? <p>{text}</p> : null}
        </>
    );
}

export default Badge;