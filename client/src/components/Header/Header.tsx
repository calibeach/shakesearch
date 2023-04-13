import williamShakespeare from "../../assets/williamShakespeare.svg"
import { StyledSubheaderText, StyledTitle, StyledIntro, StyledHeaderContainer } from "./styles"


const Header = () => {
    return (
        <StyledHeaderContainer>
            <StyledTitle>ShakeSearch</StyledTitle>
            <StyledIntro>A Simple Text Search Engine for the Works of the Bard</StyledIntro>
            <img src={williamShakespeare} width="160px" height="160px" style={{}}/>
                <StyledSubheaderText>
                     "There is more to Heaven and Earth than are dreamt of in your Philosophy"
                </StyledSubheaderText>
                <StyledSubheaderText>
                -William Shakespeare
                </StyledSubheaderText>
        </StyledHeaderContainer>
    )
}

export { Header };