import { useState } from "react"

const PasswordInput = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <input type={show ? "text" : "password"} placeholder="Digite sua senha"/>
            <button onClick={() => setShow(!show)}>Ver senha</button>
        </>
    )
}
export default PasswordInput