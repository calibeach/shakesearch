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
    header: {
        font: string,
        size: number
    }
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
            color: "#784E1F",
            radius: 5
        }
    },
    button: {
        background: {
            primary: "#1F7871",
            secondary: "#2A1F78",
            // primary: "#808000",
            // secondary: "#A52A2A"
        }
    },
    header: {
        font: `'Fondamento', cursive`,
        size: 20
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