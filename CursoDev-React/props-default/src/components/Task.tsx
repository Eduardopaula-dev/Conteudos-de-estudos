import NewTask from "./NewTaks";

const Tasks = () => {
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <NewTask description="Estudar React"/>
            <NewTask/>
        </div>
    )
}

export default Tasks