import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: "#FFFFFF";
        font-family: 'Roboto', sans-serif;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100vh;
        height: 100vh;
        font-weight: 200;
        color: #221608;
    }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #221608;
  opacity: 1; /* Firefox */
}
`


const StyledWrapper = styled.div`
    display: flex;
    padding: 44px;
    align-items: center;
    flex-direction: column;
`

export  { StyledWrapper, GlobalStyle }