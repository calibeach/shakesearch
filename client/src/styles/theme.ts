interface DefaultTheme {
    background: string,
    border: {
        color: string,
        radius: string
    },
    font: {
        family: string
    },
    quotation: {
        font: {
            family: string,
            size: number
        }
    }
}

const theme: DefaultTheme = {
    background: "#FFFFFF",
    border: {
        color: "#505050",
        radius: "5px"
    },
    font: {
        family: "Roboto, sans-serif"
    },
    quotation: {
        font: {
            family: "Roboto, sans-serif",
            size: 14
        }
    }
}

export { theme }