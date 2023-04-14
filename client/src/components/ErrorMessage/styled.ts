import styled from "styled-components"

const StyledErrorMessage = styled.p`
    display: flex;
    flex-direction: column;
    font-family: ${({theme}) => theme.errorMessage.font};
    font-size: ${({theme}) => theme.errorMessage.fontSize}px;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    margin-bottom: -12px;
`

export { StyledErrorMessage }
