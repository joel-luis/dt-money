import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/theme'
import { GlobalStyle } from 'styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>vite boilerplate</h1>
    </ThemeProvider>
  )
}
