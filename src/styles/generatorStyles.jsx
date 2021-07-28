import styled from "styled-components"

const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 2px;
  margin: 10px 0;
`

const MainSection = styled.section`
  text-align: center;
  width: 95%;
`

const GenerateButton = styled.button`
  color: white;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  border: 0;
  border-radius: 6px;
  margin-top: 20px;
  padding: 10px 3rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
  position: relative;
  top: ${(props) => props.top};
`

const ImageArea = styled.section`
  margin-top: 20px;
`

const DogImg = styled.img`
  max-width: 600px;
  max-height: 400px;
`

export { Title, MainSection, GenerateButton, ImageArea, DogImg }
