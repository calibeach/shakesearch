const FETCH_API_URL = "search?q="

async function fetchSearchResults(queryString: string) {
    const url = `${FETCH_API_URL}${queryString}`
    return fetch(url).then((response) => response.json())
}

export { fetchSearchResults }
