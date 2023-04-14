import styled from "styled-components"

const StyledSubheaderText = styled.p`
    display: flex;
    flex-direction: column;
    font-family: ${({theme}) => theme.header.subheader.font};
    font-size: ${({theme}) => theme.header.subheader.fontSize}px;
    color: ${({theme}) => theme.header.subheader.fontColor};
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    margin-bottom: -12px;
`

const StyledTitle = styled.p`
    font-family: ${({theme}) => theme.header.title.font};
    font-size: ${({theme}) => theme.header.title.fontSize}px;
    color: ${({theme}) => theme.header.title.fontColor};
    margin: -20px 10px;
`

const StyledIntro = styled.p`
    font-family: ${({theme}) => theme.header.intro.font};
    font-size: ${({theme}) => theme.header.intro.fontSize}px;
    color: ${({theme}) => theme.header.intro.fontColor};
    margin-top: -16px;
`

const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: max-content;
`

export { StyledSubheaderText, StyledTitle, StyledIntro, StyledHeaderContainer }
