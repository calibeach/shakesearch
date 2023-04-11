import {useState, useEffect, Fragment} from "react"
import { paginate } from "../../helpers"
import { ListItem } from "../ListItem"
import { ResultSummary } from "../ResultSummary"
import { StyledList, StyledListContainer, StyledArrowRight, StyledArrowLeft } from "./styles"


const List = ({searchResults} : {searchResults: string[]}) => {
    const [paginatedResults, setPaginatedResults] = useState<string[]>([])
    const [page, setPage] = useState(1)
    const [hasPreviousPage, setHasPreviousPage] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [totalPages, setTotalPages] = useState(0)
    const [total, setTotal] = useState(0)


    const RESULTS_PER_PAGE = 5

    const pagination = paginate(searchResults, page, RESULTS_PER_PAGE)

    useEffect(() => {
        setTotalPages(pagination.totalPages)
        setTotal(pagination.total)
    },[])

    useEffect(() => {
        setPaginatedResults(pagination.items)
        pagination.previousPage == null ? setHasPreviousPage(false) : setHasPreviousPage(true)
        pagination.nextPage == null ? setHasNextPage(false) : setHasNextPage(true)
        console.log("[eys]", pagination)
    },[page])

    useEffect(() => {
        console.log("[eys] total ", total, "totalPages ", totalPages)
    },[total, totalPages])

    const handlePageForward = () => {
        console.log("[eys] forward")
        setPage(page + 1)
    }

    const handlePageBack = () => {
        console.log("[eys] backward")
        setPage(page - 1)
    }

    return (
        <Fragment>
                    <ResultSummary items={paginatedResults.length} currentPage={page} total={pagination.total} totalPages={pagination.totalPages}/>
        <StyledListContainer>
            {paginatedResults && 
                <Fragment>
                    <StyledArrowLeft onClick={handlePageBack}/>
                        <StyledList>
                            {paginatedResults && paginatedResults.map((item, index) => {
                                    return (
                                        <ListItem quotation={item} key={index}/>
                                    )
                            })}
                        </StyledList>
                    <StyledArrowRight onClick={handlePageForward}/>
                </Fragment>
                }
            </StyledListContainer>
        </Fragment>
    )
}

export { List }