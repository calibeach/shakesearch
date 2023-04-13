import styled from "styled-components"

const StyledMessage = styled.p`
    display: flex;
    flex-direction: column;
    font-family: ${({theme}) => theme.header.subheader.font};
    font-size: ${({theme}) => theme.header.subheader.fontSize}px;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    margin-bottom: -12px;
`

export { StyledMessage }