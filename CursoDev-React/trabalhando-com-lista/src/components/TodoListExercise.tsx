import { useState } from "react";

type Todo = {
    text: string;
    id: number
}

export const TodoExercise = () => {
    const [todoList] = useState<Todo[]>([
        { id: 1, text: "Estudar React" },
        { id: 2, text: "Praticar TSX" },
        { id: 3, text: "Dormir" }
    ])

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ol>
                {todoList.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ol>
        </div>
    )
}