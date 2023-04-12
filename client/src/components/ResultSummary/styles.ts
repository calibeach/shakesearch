import styled from "styled-components"
import { ArrowRight } from "@styled-icons/fa-solid/ArrowRight"
import { ArrowLeft } from "@styled-icons/fa-solid/ArrowLeft/"

const StyledResultSummary = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 70vh;
`

const StyledArrowRight = styled(ArrowRight)`
    color: black;
    height: 16px;
    width: 16px;
    margin: 5px;
` 

const StyledArrowLeft = styled(ArrowLeft)`
    color: black;
    height: 16px;
    width: 16px;
    margin: 5px;
` 

export { StyledResultSummary, StyledArrowRight, StyledArrowLeft }