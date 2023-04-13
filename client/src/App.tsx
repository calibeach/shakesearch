import './App.css'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Header } from './components/Header/Header'
import { fetchSearchResults } from './apis/api'
import {StyledWrapper } from './styles/global'
import { SearchBar } from "./components/SearchBar/SearchBar"
import { List } from "./components/List"
import { ErrorMessage } from './components/ErrorMessage'

function App() {
  const [queryString, setQueryString] = useState("")

  const query = useQuery(['query ' + queryString], () => fetchSearchResults(queryString), {enabled: queryString.length > 0});

  return (
      <StyledWrapper>
        <Header />
        <SearchBar handleSubmit={(query) => setQueryString(query)}/>
        {query.data && <List queryString={queryString} searchResults={query.data}/>}
      </StyledWrapper>
  )
}

export default App
