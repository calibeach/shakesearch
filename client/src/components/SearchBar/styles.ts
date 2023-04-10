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
  flex: 1 0;
  min-width: 300px;
  min-height: 25px;
  border: 1px solid ${({theme}) => theme.border.color};
  border-radius: 5px;
  background-color: transparent;
  padding: 5px;
  margin: 10px;
  &:focus {
    outline: none
  }
  color: black;
`

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  max-height: 36px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`