import styled from "styled-components"

const StyledHeaderText = styled.p`
    display: flex;
    flex-direction: column;
    font-family: ${({theme}) => theme.header.font};
    font-size: ${({theme}) => theme.header.size}px;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    margin-bottom: -12px;
`

export { StyledHeaderText }