import { StyledListItem } from "./styles"

const ListItem = ({quotation} : {quotation: string}) => {
    return (
        <StyledListItem>
            {`...${quotation}...`}
        </StyledListItem>
    )
}

export { ListItem }