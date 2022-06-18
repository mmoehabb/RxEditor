const mediaQuery = (query: string): boolean => {
    return window.matchMedia(query).matches;
}

export default mediaQuery;