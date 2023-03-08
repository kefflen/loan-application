import { ThemeProvider } from 'styled-components'
import { theme } from './themes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      </div>
    </ThemeProvider>
  )
}

export default App
