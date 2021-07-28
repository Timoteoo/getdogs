import { useState } from "react"
import { Title, MainSection, GenerateButton } from "../styles/generatorStyles"

const Generator = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  return (
    <MainSection>
      <Title>GetDogs</Title>
      <p>Pronto para achar a imagem perfeita? Clique no botão abaixo!</p>
      <GenerateButton
        top={isButtonActive ? "2px" : "0"}
        onMouseDown={() => setIsButtonActive(true)}
        onMouseUp={() => setIsButtonActive(false)}
      >
        Gerar
      </GenerateButton>
    </MainSection>
  )
}

export default Generator
