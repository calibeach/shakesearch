
  async function fetchSearchResults (searchQuery: string) {
    const res = await fetch(`https://edwardshei-pulley-backend.onrender.com/api/search?q=${searchQuery}`);
    return await res.json();
  }

export { fetchSearchResults }
