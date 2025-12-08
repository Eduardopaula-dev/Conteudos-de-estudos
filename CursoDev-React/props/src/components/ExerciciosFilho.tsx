/* ✅ Exercício 1 — Componente Perfil com Props

📌 Regras:
Crie um componente Perfil
Ele deve receber via props:
    nome (string)
    idade (number)
Exibir os dois valores na tela
No App, renderize duas pessoas diferentes

🎯 Objetivo:
Praticar props simples + tipagem com TypeScript */

type PerfilProps = {
    nome: string
    idade: number
}

const NewProfile = ({nome, idade}: PerfilProps) => {
    return (
        <div>
            <h2>{nome}</h2>
            <p>idade: {idade}</p>
        </div>
    )
}

export default NewProfile

/* 🎬 Exercício 2 — Card de Filme com Props

📌 Regras:
Criar um componente Filme
Ele deve receber via props:
    título (string)
    ano (number)
Exibir o título em destaque e o ano embaixo
No App, mostrar 2 filmes diferentes

🎯 Objetivo:
Reutilização de componente com props diferentes */

type FilmsProps = {
    titulo: string
    ano: number
}

const NewFilms = ({titulo, ano}: FilmsProps) => {
    return (
        <div>
            <p>{titulo}</p>
            <p>{ano}</p>
        </div>
    )
}

export {NewProfile, NewFilms}