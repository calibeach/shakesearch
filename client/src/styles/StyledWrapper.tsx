import styled from "styled-components";

const StyledWrapper = styled.div`
    background: ${({theme}) => theme.background};
    font: ${({theme}) => theme.font.family};
    display: flex;
    padding: 50px;
    width: 240px;
    height: 300px;
    justify-content: flex-end;
    flex-direction: column;
`   

export default StyledWrapper