import axios from "axios"
const url = "https://dog.ceo/api/breeds/image/random"

export const fetchImage = async () => {
  const response = await axios.get(url)
  const imageUrl = response.data.message
  return imageUrl
}
