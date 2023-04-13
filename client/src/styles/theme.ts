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
            fontSize: number
        }
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
            fontSize: 20
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