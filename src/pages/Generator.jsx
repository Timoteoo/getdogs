import { useEffect, useState } from "react"
import {
  Title,
  MainSection,
  GenerateButton,
  ImageArea,
  DogImg,
} from "../styles/generatorStyles"
import Loading from "react-spinners/ScaleLoader"
import { fetchImage } from "../fetchImage"

const Generator = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)
  const [image, setImage] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const getImage = () => {
    setIsLoading(true)
    fetchImage().then((url) => {
      setImage(url)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchImage().then((url) => {
      setImage(url)
      setIsLoading(false)
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
        onClick={getImage}
      >
        Generate
      </GenerateButton>
      <ImageArea>
        {isLoading ? (
          <Loading color="#59b2dd" />
        ) : (
          <DogImg alt="Dog" src={image} />
        )}
      </ImageArea>
    </MainSection>
  )
}

export default Generator
