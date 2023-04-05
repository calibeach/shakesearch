import styled from "styled-components";

const StyledWrapper = styled.div`
    background: ${({theme}) => theme.background};
    font: ${({theme}) => theme.font.family};
    display: flex;
    padding: 50px;
    width: 90vh;
    height: 90vh;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

export default StyledWrapper