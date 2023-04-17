interface DefaultTheme {
    background: string,
    searchBar: {
        border: {
            color: string,
            radius: number
        },
    },
    listItem: {
        backgroundColor: string,
        boxShadowColor: string,
        opacity: number,
        margin: number
    },
    errorMessage: {
        font: string,
        fontSize: number
    }
    button: {
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
        color: {
            primary: string;
            secondary: string;
            tertiary: string;
        }
    },
    header: {
        title: {
            font: string
            fontSize: number
            fontColor: string
        },
        intro: {
            font: string,
            fontSize: number,
            fontColor: string
        }
        subheader: {
            font: string,
            fontSize: number,
            fontColor: string
        }
    },
    resultSummary: {
        arrowColor: string
    },
    spinner: {
        borderColor: string
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
    errorMessage: {
        font: `'Fondamento', cursive`,
        fontSize: 20
    },
    button: {
        background: {
            primary: "#1F7871",
            secondary: "#2A1F78",
            tertiary: "transparent"
        },
        color: {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
            tertiary: "#784E1F",
        }
    },
    header: {
        title: {
            font: `'Charmonman', cursive;`,
            fontSize: 80,
            fontColor: "#553716"
        },
        intro: {
            font: `'Charmonman', cursive;`,
            fontSize: 16,
            fontColor: "#553716"
        },
        subheader: {
            font: `'Fondamento', cursive`,
            fontSize: 20,
            fontColor: "#553716"
        }
    },
    listItem: {
        backgroundColor: `rgba(216, 204, 191, .4)`,
        boxShadowColor: `rgba(216, 204, 191, .4)`,
        opacity: 0.8,
        margin: 10
    },
    resultSummary: {
        arrowColor: "#553716"
    },
    spinner: {
        borderColor: "#553716"
    }
}

export { theme }
