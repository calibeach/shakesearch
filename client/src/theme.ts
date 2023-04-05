interface DefaultTheme {
    background: string,
    border: {
        color: string,
        radius: string
    }
    font: {
        family: string
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
    }
}

export { theme }