import { useState } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = () => {
        if (inputValue.trim() === "") return;

        setTasks([...tasks, inputValue]);
        setInputValue("")
    };

    const removeTask = (taskToRomeve: string) => {
        setTasks(tasks.filter((task) => task !== taskToRomeve))
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Lista de Tarefas</h2>

            <input type="text" placeholder="Digite uma tarefa..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            <button onClick={addTask}>Adicionar</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task}>
                        {task}
                        <button onClick={() => removeTask(task)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList