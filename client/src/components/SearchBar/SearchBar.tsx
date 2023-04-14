import { Button } from '../Button'
import { useState, FormEvent, useEffect } from 'react'
import { StyledInput, StyledForm, StyledSearchBarContainer } from './styles'

const SearchBar = ({ handleSubmit } : {handleSubmit: (s:string) => void}) => {
  const [query, setQuery] = useState("")

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(query)
  }

  const handleClear = () => {
    setQuery("")
  }

  return (
    <StyledSearchBarContainer>
      <StyledForm onSubmit={(e: FormEvent<HTMLFormElement>) => {handleFormSubmit(e)}}>
        <StyledInput type="text" value={query} placeholder="Search the wisdom of the Bard..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} />
        <Button type="submit" variant='primary'>Search</Button>
        <Button variant="secondary" onClick={handleClear}>Clear</Button>
      </StyledForm>
    </StyledSearchBarContainer>
  )
}

export { SearchBar }
