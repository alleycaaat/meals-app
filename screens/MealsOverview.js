import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { MEALS, CATEGORIES } from '../data/data';
import MealItem from '../components/MealItem';

function MealsOverview({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: catTitle
        });
    }, [catId, navigation]);

    function renderMealItem(itemData) {
        return (
            <MealItem data={itemData.item} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});