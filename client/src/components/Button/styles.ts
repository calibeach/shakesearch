import styled from "styled-components"

type ButtonVariant = "primary" | "secondary" 

const StyledButton = styled.button<{variant: ButtonVariant}>`
    background-color: ${({theme, variant}) => theme.button.background[variant]};
    color: white;
    max-height: 36px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 50px;
    width: 60px;
    margin: 0px 5px;
`

export { StyledButton }
export type { ButtonVariant }