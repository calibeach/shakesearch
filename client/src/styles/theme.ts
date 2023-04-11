interface DefaultTheme {
    background: string,
    searchBar: {
        border: {
            color: string,
            radius: number
        },
    },
    listItem: {
        border: {
            color: string,
            radius: number
        }
    },
    button: {
        background: {
            primary: string;
            secondary: string;
        };
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
    searchBar: {
        border: {
            color: "#505050",
            radius: 5
        }
    },
    button: {
        background: {
            primary: "#4caf50",
            secondary: "#E7625F",
        }
    },
    listItem: {
        border: {
            color: "#505050",
            radius: 5
        }
    },
    quotation: {
        font: {
            family: "Roboto, sans-serif",
            size: 14
        }
    }
}

export { theme }