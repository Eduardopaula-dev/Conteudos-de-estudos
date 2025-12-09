type TaskProps = {
    description?: string
}

const NewTask = ({description = "Nenhuma tarefa cadastrada"}: TaskProps) => {
    return <p>Tarefa: {description}</p>
}

export default NewTask