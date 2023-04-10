import { useState } from 'react'
import styled from 'styled-components'
import { FeatherPointed } from '@styled-icons/fa-solid/FeatherPointed'
import { StyledInput, StyledForm, StyledButton, StyledSearchBarContainer } from './styles'
import { FormEvent } from 'react'

const StyledFeatherPointed = styled(FeatherPointed)`
  color: #370707;
`

const SearchBar = ({handleSubmit} : {handleSubmit: (s:string) => void}) => {
  const [query, setQuery] = useState("")

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleSubmit(query)
  }


  return (
    <StyledSearchBarContainer>
      <StyledForm onSubmit={(e) => {handleFormSubmit(e)}}>
        <StyledInput type="text" value={query} placeholder="Type Character Name Here" onChange={(e) => setQuery(e.target.value)}/>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledSearchBarContainer>
  )
}

export { SearchBar }