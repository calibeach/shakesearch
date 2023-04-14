
  async function fetchSearchResults (searchQuery: string) {
    // utilized below fetch in development environment
    // const res = await fetch(`/api/search?q=${searchQuery}`);

    // below address is for production environment
    const res = await fetch(`https://edwardshei-pulley-backend.onrender.com/api/search?q=${searchQuery}`);
    return await res.json();
  }

export { fetchSearchResults }


