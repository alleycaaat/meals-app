import { useContext } from 'react';

import MealsList from '../components/MealsList/MealsList';
import { FavsContext } from '../store/context/favorites-context';
import { MEALS } from '../data/data';

function Favorites() {
    const favMealsCtx = useContext(FavsContext);
    const favMeals = MEALS.filter(meal => favMealsCtx.ids.includes(meal.id));

    return (
        <MealsList items={favMeals} />
    );
}

export default Favorites;