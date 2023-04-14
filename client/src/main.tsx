import './index.css'
import App from './App'
import React from 'react'
import { theme } from "./styles/theme"
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
