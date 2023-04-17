import { SpinnerProps, StyledSpinner } from "./styled";


const LoadingSpinner = (props: SpinnerProps) => {
    return (
        <StyledSpinner {...props}/>
    )
}

export { LoadingSpinner }