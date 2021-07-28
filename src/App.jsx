import { GlobalStyles } from "./styles/globalStyle"
import Generator from "./pages/Generator"
import { Main } from "./styles/main"

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Generator />
    </Main>
  )
}

export default App
