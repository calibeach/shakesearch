import styled, { css } from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 5px;
`
export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    padding: 20px;
    border-radius: 5px;
`

export const StyledInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none
  }
`

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`