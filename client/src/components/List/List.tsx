import { ListItem } from "../ListItem"
import { StyledList } from "./styles"

const List = ({searchResults} : {searchResults: string[]}) => {
    console.log("[eys] list.tsx ", searchResults ) 

    return (
    <StyledList>
        {searchResults && searchResults.map((item, index) => {
            return (
                <ListItem quotation={item} />
            )
        })}
    </StyledList>
    )
}

export { List }