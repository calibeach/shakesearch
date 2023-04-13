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

    let beginningNumberOfResults, endNumberOfResults

    if (items < 5 ) {
        beginningNumberOfResults = currentPage * 5 - 4;
        endNumberOfResults = beginningNumberOfResults + items - 1
    } else {
        endNumberOfResults = currentPage * 5
        beginningNumberOfResults = endNumberOfResults - 4
    }


    return (
        <StyledResultSummary>
            <StyledArrowLeft onClick={handlePageBack}/>
            {beginningNumberOfResults} - {endNumberOfResults} of {total} Entries      |      {currentPage} of {totalPages}  Pages
            <StyledArrowRight onClick={handlePageForward}/>
        </StyledResultSummary>
    )
}

export { ResultSummary }