import styled, { keyframes } from "styled-components"

interface SpinnerProps {
  width?: string;
  height?: string;
  borderWidth?: string;
  duration?: number;
}

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  height: ${(p) => (p.height ? p.height : "4rem")};
  width: ${(p) => (p.width ? p.width : "4rem")};
  border: ${(p) => (p.borderWidth ? p.borderWidth : "4px")} solid ${({theme}) => theme.spinner.borderColor};
  border-radius: 50%;
  animation: ${spinnerAnimation}
    ${(p) => (p.duration ? `${p.duration}ms` : "800ms")} linear infinite;
`;

export { StyledSpinner }
export type { SpinnerProps }