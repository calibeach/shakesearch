import { StyledListItem } from "./styles"
import { ReactNode } from "react"

interface ListItemProps {
    children?: ReactNode
}


const ListItem = ({children}: ListItemProps) => {
    return (
        <StyledListItem>
            {children}
        </StyledListItem>
    )
}

export { ListItem }
