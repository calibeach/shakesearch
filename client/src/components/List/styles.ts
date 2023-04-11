import styled from "styled-components"
import { ArrowRight } from "@styled-icons/fa-solid/ArrowRight"
import { ArrowLeft } from "@styled-icons/fa-solid/ArrowLeft/"

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const StyledListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

const StyledArrowRight = styled(ArrowRight)`
    color: black;
    height: 150px;
    width: 150px;
` 

const StyledArrowLeft = styled(ArrowLeft)`
    color: black;
    height: 150px;
    width: 150px;
` 

export { StyledList, StyledListContainer, StyledArrowRight, StyledArrowLeft }
