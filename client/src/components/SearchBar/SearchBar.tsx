import styled from 'styled-components'
import { FeatherPointed } from '@styled-icons/fa-solid/FeatherPointed'
import { StyledInput, StyledForm, StyledButton } from './styles'
import {FormEvent, FunctionComponent, useState} from 'react'

const StyledFeatherPointed = styled(FeatherPointed)`
  color: red;
`




const SearchBar = () => {
  const [query, setQuery] = useState("")
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("[eys] query ", query)
  }

  return (
  <StyledForm onSubmit={handleSubmit}>
    <StyledInput type="text" value={query} placeholder="Type Character Name Here" onChange={(e) => setQuery(e.target.value)}/>
    <StyledButton type="submit">Submit</StyledButton>
  </StyledForm>
  )
}

export default SearchBar