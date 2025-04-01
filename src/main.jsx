import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Sriracha',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#000000',
      // main: '#42a5f5',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
