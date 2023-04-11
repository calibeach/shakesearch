import { StyledResultSummary } from "./styles";

type ResultSummary = {
    items: number,
    total: number,
    totalPages: number,
    currentPage: number
}

const ResultSummary = ({items, currentPage, total, totalPages}:ResultSummary) => {
    let endNumberOfResults = currentPage * 5
    let beginningNumberOfResults = endNumberOfResults - 4

    return (
        <StyledResultSummary>
            Displaying Results: {beginningNumberOfResults} - {endNumberOfResults} Total Entries: {total} Page: {currentPage} Total Pages: {totalPages}
        </StyledResultSummary>
    )
}

export { ResultSummary }