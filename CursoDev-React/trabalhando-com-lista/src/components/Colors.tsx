type Color = {
    text: string;
    id: number
}
export const ColorList = () => {
    const colors: Color[] = [
        {id: 1, text: "Vermelho"},
        {id: 2, text: "Azul"},
        {id: 3, text: "Verde"}
    ]

    return (
        <div>
            <h1>Lista de Cores</h1>
            <ul>
                {
                    colors.map(Color => (
                        <li key={Color.id}>{Color.text}</li>
                    ))
                }
            </ul>
        </div>
    )

    
}

//Código Atualizado com useState
/* import { useState } from "react"

type Color = {
  id: number
  text: string
}

export const ColorList = () => {
  const [colors] = useState<Color[]>([
    { id: 1, text: "Vermelho" },
    { id: 2, text: "Azul" },
    { id: 3, text: "Verde" }
  ])

  return (
    <div>
      <h1>Lista de Cores</h1>

      <ul>
        {colors.map(color => (
          <li key={color.id}>{color.text}</li>
        ))}
      </ul>
    </div>
  )
} */