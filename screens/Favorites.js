import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealsList from '../components/MealsList/MealsList';
import { FavsContext } from '../store/context/favorites-context';
import { MEALS } from '../data/data';

function Favorites() {
    const favMealsCtx = useContext(FavsContext);
    const favMeals = MEALS.filter(meal => favMealsCtx.ids.includes(meal.id));

    if (favMeals.lenth === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No meals have been favorited.</Text>
            </View>
        );
    }
    return (
        <MealsList items={favMeals} />
    );
}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});