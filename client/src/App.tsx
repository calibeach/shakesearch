import './App.css'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Header from './components/Header/Header'
import { fetchSearchResults } from './apis/api'
import StyledWrapper from './styles/StyledWrapper'
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  const [queryString, setQueryString] = useState("")

  const query = useQuery(['query', queryString], () => fetchSearchResults(queryString), {enabled: queryString.length > 0});

  return (
    <div className="App">
      <StyledWrapper>
        <Header />
        <SearchBar handleSubmit={(query) => setQueryString(query)}/>
      </StyledWrapper>
    </div>
  )
}

export default App
