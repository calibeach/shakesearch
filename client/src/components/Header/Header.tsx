import williamShakespeare from "../../assets/williamShakespeare.svg"
import {StyledHeaderText} from "./styles"


const Header = () => {
    return (
        <>
            <img src={williamShakespeare} width="100px" height="100px" style={{}}/>
                <StyledHeaderText>
                     "There is more to Heaven and Earth than are dreamt of in your Philosophy"
                </StyledHeaderText>
                <StyledHeaderText>
                -William Shakespeare
                </StyledHeaderText>
        </>
    )
}

export { Header };