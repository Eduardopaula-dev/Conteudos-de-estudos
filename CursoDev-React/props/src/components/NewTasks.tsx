type TaskProps = {
    description: string
}

const NewTask = ({description}: TaskProps) => {
    return <p>Tarefa: {description}</p>
}

export default NewTask