import styled, { keyframes } from "styled-components"

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div`
  height: 104px;
  width: 104px;
  border: 4px solid ${({theme}) => theme.spinner.borderColor};
  border-top-color: ${({theme}) => theme.spinner.borderTop};
  border-radius: 50%;
  animation: ${spinnerAnimation}
    800ms linear infinite;
`;

export { StyledSpinner }