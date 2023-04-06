
  async function fetchSearchResults (searchQuery: string) {
    const res = await fetch(`/api/search?q=${searchQuery}`);
    return await res.json();
  }

export { fetchSearchResults }
