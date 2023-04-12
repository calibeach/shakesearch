import { useState } from 'react'
import styled from 'styled-components'
import { StyledInput, StyledForm, StyledSearchBarContainer } from './styles'
import { FormEvent } from 'react'
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline"
import { Button } from '../Button'

const StyledCloseOutline = styled(CloseOutline)`
  color: #000000;
  height: 80px;

`

const SearchBar = ({handleSubmit} : {handleSubmit: (s:string) => void}) => {
  const [query, setQuery] = useState("")

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleSubmit(query)
  }

  const handleClear = () => {
    setQuery("")
  }


  return (
    <StyledSearchBarContainer>
      <StyledForm onSubmit={(e) => {handleFormSubmit(e)}}>
        <StyledInput type="text" value={query} placeholder="Search the wisdom of the Bard..." onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit" variant='primary'>Search</Button>
        <Button variant="secondary" onClick={handleClear}>Clear</Button>
      </StyledForm>
    </StyledSearchBarContainer>
  )
}

export { SearchBar }