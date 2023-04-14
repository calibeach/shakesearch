import styled, { css } from 'styled-components'

export const StyledSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 100%;
    border-radius: 5px;
    align-items: center;
`

export const StyledInput = styled.input`
  min-width: 300px;
  min-height: 25px;
  border: 1px solid ${({theme}) => theme.searchBar.border.color};
  border-radius: ${({theme})=> theme.searchBar.border.radius}px;
  background-color: transparent;
  padding: 5px;
  margin: 10px;
  &:focus, &:hover {
    outline: none;
    box-shadow: 0 0 4px ${({theme}) => theme.searchBar.border.color};
  }
`
