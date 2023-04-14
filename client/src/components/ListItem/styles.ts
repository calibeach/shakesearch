import styled from "styled-components"

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({theme}) => theme.listItem.backgroundColor};
  margin: 10px;
  list-style-type: none;
  opacity: ${({theme}) => theme.listItem.opacity};
  box-shadow: 0 0 10px 5px ${({theme}) => theme.listItem.backgroundColor};
`

export { StyledListItem }
