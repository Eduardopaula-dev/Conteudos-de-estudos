import { useState } from "react"


export const CountLimit = () => {
    const [valueInitial, setValueInitial] = useState(0)
    const [maxValue, setMaxValue] = useState(10)
    const [started, setStarted] = useState(false)
    const [count, setCount] = useState(0)

    const Started = () => {
        setCount(valueInitial)
        setStarted(true)
    }

    const Increment = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    if (!started) {
        return (
            <div>
                <h1>Configuração do Contador</h1>
                <p>Coloque um valor inical e um valor máximo</p>

                <div>
                    <label>Contador Inicial: </label>
                    <input type="number" value={valueInitial} onChange={(e) => setValueInitial(Number(e.target.value))} />
                </div>

                <div>
                    <label>Contador Limite: </label>
                    <input type="number" value={maxValue} onChange={(e) => setMaxValue(Number(e.target.value))} />
                </div>

                <button onClick={Started}>Iniciar</button>
            </div>
        )

    }

    return (
        <div>
            <h2>Contador: {count}</h2>

            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>

            {count === maxValue && (
                <p>Você atingiu o valor máximo! 😊</p>
            )}
        </div>
    )
}