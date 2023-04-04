
async function fetchSearchResults(queryString: string) {
    const res = await fetch(
        `search?q=${queryString}}`
    )
}