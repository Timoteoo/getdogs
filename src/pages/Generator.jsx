import { useEffect, useState } from "react"
import {
  Title,
  MainSection,
  GenerateButton,
  ImageArea,
  DogImg,
} from "../styles/generatorStyles"
import { fetchImage } from "../fetchImage"

const Generator = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)
  const [image, setImage] = useState("")

  useEffect(() => {
    fetchImage().then((url) => {
      setImage(url)
    })
  }, [])

  return (
    <MainSection>
      <Title>GetDogs</Title>
      <p>Ready to find the most beautiful dog? Click the button below!</p>
      <GenerateButton
        top={isButtonActive ? "2px" : "0"}
        onMouseDown={() => setIsButtonActive(true)}
        onMouseUp={() => setIsButtonActive(false)}
      >
        Gerar
      </GenerateButton>
      <ImageArea>
        <DogImg alt="Dog" src={image} />
      </ImageArea>
    </MainSection>
  )
}

export default Generator
