import {useState, useEffect, Fragment} from "react"
import { paginate } from "../../helpers"
import { ListItem } from "../ListItem"
import { ResultSummary } from "../ResultSummary"
import Highlighter from "react-highlight-words"
import { StyledList, StyledListContainer } from "./styles"
import { ErrorMessage } from "../ErrorMessage"

type ListPropTypes = {
    searchResults: string[],
    queryString: string
}

const List = ({searchResults, queryString } : ListPropTypes ) => {
    const [paginatedResults, setPaginatedResults] = useState<string[]>([])
    const [page, setPage] = useState(1)
    const [hasPreviousPage, setHasPreviousPage] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(true)

    const RESULTS_PER_PAGE = 5

    const pagination = paginate(searchResults, page, RESULTS_PER_PAGE)

    useEffect(() => {
        setPaginatedResults(pagination.items)
        pagination.previousPage == null ? setHasPreviousPage(false) : setHasPreviousPage(true)
        pagination.nextPage == null ? setHasNextPage(false) : setHasNextPage(true)
    },[page])

    const handlePageForward = () => {
        if (!hasNextPage) {
            return
        }
        setPage(page + 1)
    }

    const handlePageBack = () => {
        if (!hasPreviousPage) {
            return
        }
        setPage(page - 1)
    }

    return (
        <Fragment>
            <ResultSummary items={paginatedResults.length} currentPage={page} total={pagination.total} totalPages={pagination.totalPages} handlePageForward={handlePageForward} handlePageBack={handlePageBack}/>
                <StyledListContainer>   
                    {searchResults.length === 0 ? 
                        (paginatedResults && 
                            <ErrorMessage />
                             ) : (paginatedResults &&
                                <StyledList>
                                    {paginatedResults && paginatedResults.map((item, index) => {
                                        return (
                                            <ListItem key={index}>
                                                <Highlighter key={index} textToHighlight={`...${item}...`} searchWords={[queryString]}/>
                                            </ListItem>
                                        )
                                    })}
                                </StyledList>
                            )
                        }
                </StyledListContainer>
        </Fragment>
    )
}

export { List }
