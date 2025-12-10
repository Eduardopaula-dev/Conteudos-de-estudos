/* 🧩 Exercício 3 — Avatar

🎯 Dicas:
Você já fez imagens redondas antes 😉
A prop name é exibida em texto, bem simples
A prop photo precisa ter valor padrão caso não venha nada
    Dica: use uma URL de avatar genérico
Lembre da lógica:
    Quer mostrar imagem sempre → então não pode ser children
No Pai → 3 avatares:
    1 com nome e sem foto → validar o padrão
    2 com imagem diferente
💬 Pergunta para te guiar:
    A imagem será um <p> ou uma <img>? Qual faz mais sentido para imagens reais? */

import "./CardAvatar.css"

type AvatarProps = {
    name: string;
    photo?: string;
}

const Avatar = ({name, photo = "https://placecats.com/300/200" }: AvatarProps) => {
    return (
        <div className="card-avatar">
            <img src={photo} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default Avatar