/* ✅ Exercício 1 — Cartão de Boas-vindas

Nível: Fácil/Médio

📌 Regras:

Criar um componente Saudacao
Ele recebe via props:
    nome (string)
Se o nome não for enviado → usar um valor padrão, tipo “Visitante”
No Pai (App), renderizar:
    Um componente com nome
    Um componente sem passar nome, para testar o valor padrão

🎯 Objetivo:
Props simples + Default props + Reutilização */

interface HelloProps {
    nome?: string
}

const NewGreeting = ({nome = "Visitante"}: HelloProps) => {
    return <h2>Seja Bem-Vindo, {nome}</h2>
}

export {NewGreeting}

/* 🟦 Exercício 2 — Produto com Preço

Nível: Médio
📌 Regras:

Criar componente Produto
Receber via props:
    nome (string)
    preco (number)
O preço deve ter valor padrão (ex.: 0 ou “A definir”)

No Pai:
    Mostrar 3 produtos
    Pelo menos 1 sem preço, para testar padrão

🎯 Objetivo:
Treinar múltiplas props + default em números */

interface ProductProps {
    name: string;
    price?: number|string;
}

const NewProducts = ({name, price = "A ser definido"}: ProductProps) => {
    return (
        <div>
            <p>Produto: {name}</p>
            <p>Preço: {price}</p>
        </div>
    )
}

export {NewProducts}


/* 🔥 Exercício 3 — Card de Perfil com estilo

Nível: Difícil (dentro do que você já aprendeu)

📌 Regras:

Criar um componente Perfil
Props:
    nome (string)
    idade (number)
    foto (string → URL de imagem)
Apenas a foto tem valor padrão (uma imagem qualquer da internet)
Todo conteúdo do componente deve estar dentro de uma div
Criar um CSS básico para o card:
    Borda
    Espaçamento
    Foto redonda com tamanho definido
No Pai (App):
    Renderizar 3 perfis
    Pelo menos 1 sem foto
🎯 Objetivo:
Reaproveitamento + CSS + props com valores padrão */

interface CardProps {
    name: string;
    age: number;
    photo?: string;
}

const NewCard = ({name, age, photo = "https://placecats.com/300/200"}: CardProps) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "10px" }}>
            <img src={photo} alt={name} style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}

export {NewCard}