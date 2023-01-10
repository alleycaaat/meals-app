import { createContext, useState } from 'react';

export const FavsContext = createContext({
    ids: [],
    addFav: (id) => { },
    removeFav: (id) => { },
});

function FavoritesContextProvider({ children }) {
    const [favMealIds, setFavMealIds] = useState([]);

    function addFav(id) {
        setFavMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFav(id) {
        setFavMealIds((currentFavIds) =>
            currentFavIds.filter((mealId) => mealId !== id)
        );
    }

    const value = {
        ids: favMealIds,
        addFav: addFav,
        removeFav: removeFav,
    };

    return (
        <FavsContext.Provider value={value}>
            {children}
        </FavsContext.Provider>
    );
}

export default FavoritesContextProvider;