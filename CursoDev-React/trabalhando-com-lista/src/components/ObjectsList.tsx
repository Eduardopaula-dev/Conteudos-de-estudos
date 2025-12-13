import { useState } from "react"

type User = {
    name: string
    id: number
}

export const UserList = () => {
    const [users] = useState<User[]>([
        { id: 1, name: "João" },
        { id: 2, name: "Carlos" },
        { id: 3, name: "Ricardo" },
        { id: 4, name: "Angela" },
        { id: 5, name: "Pamela" },
        { id: 6, name: "Federico" },
        { id: 7, name: "Gabriela" },
        { id: 8, name: "João Paulo" },
    ])

    return (
        <div>
            <h2>Lista de Usuários</h2>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}

        </div>
    )
}