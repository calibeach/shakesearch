import { useState } from 'react'
import SearchBar from "./components/SearchBar/SearchBar"
import Header from './components/Header/Header'
import StyledWrapper from './styles/StyledWrapper'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StyledWrapper>
        <Header />
        <SearchBar />
      </StyledWrapper>
    </div>
  )
}

export default App
