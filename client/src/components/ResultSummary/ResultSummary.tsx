import { StyledResultSummary, StyledArrowRight, StyledArrowLeft  } from "./styles";

type ResultSummary = {
    items: number,
    total: number,
    totalPages: number,
    currentPage: number,
    handlePageForward: () => void,
    handlePageBack: () => void
}

const ResultSummary = ({items, currentPage, total, totalPages, handlePageBack, handlePageForward}:ResultSummary) => {
    let endNumberOfResults = currentPage * 5
    let beginningNumberOfResults = endNumberOfResults - 4

    return (
        <StyledResultSummary>
            <StyledArrowLeft onClick={handlePageBack}/>
            {beginningNumberOfResults} - {endNumberOfResults} of {total} Entries      |      {currentPage} of {totalPages}  Pages
            <StyledArrowRight onClick={handlePageForward}/>
        </StyledResultSummary>
    )
}

export { ResultSummary }