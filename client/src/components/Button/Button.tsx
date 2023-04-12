import React from "react";
import { StyledButton, ButtonVariant } from "./styles";

interface ButtonProps 
    extends React.HTMLAttributes<HTMLButtonElement>{
        type?: string;
        variant?: ButtonVariant
    }

const Button = ({children, type, variant="primary", ...rest}: ButtonProps) => {
    return (
        <StyledButton variant={variant} {...rest}>
            {children}
        </StyledButton>
    );
}

export { Button }
