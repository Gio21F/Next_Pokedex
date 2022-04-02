const toggleFavorite = (id: number) => {
    const favorites = localStorage.getItem('favorites') || '[]';
    const favoritesArray = JSON.parse(favorites);
    const index = favoritesArray.indexOf(id);
    if (index === -1) {
        favoritesArray.push(id);
    } else {
        favoritesArray.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
}

const existFavorite = (id: number): boolean => {
    if ( typeof window === 'undefined') return false; // server side
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.includes(id);
}

const getFavorites = (): number[] => {
    if ( typeof window === 'undefined') return []; // server side
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    toggleFavorite,
    existFavorite,
    getFavorites
}