import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLayoutEffect, useContext } from 'react';

import { MEALS } from '../data/data';

import { FavsContext } from '../store/context/favorites-context';

import List from '../components/MealDetail/List';
import CountList from '../components/MealDetail/CountList';
import Subtitle from '../components/MealDetail/Subtitle';
import IconButton from '../components/IconButton';

import Colors from '../utils/Colors';

function MealDetails({ route, navigation }) {
    const FavMealsCtx = useContext(FavsContext);

    const data = route.params.mealId;
    const mealData = MEALS.find((meal) => meal.id === data);

    const mealIsFav = FavMealsCtx.ids.includes(data);

    function favStatusHandler() {
        if (mealIsFav) {
            FavMealsCtx.removeFav(data);
        } else {
            FavMealsCtx.addFav(data);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        onPress={favStatusHandler}
                        color='white'
                        icon={mealIsFav ? 'star' : 'star-outline'}
                    />
                );
            },
        });
    }, [navigation, favStatusHandler]);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{mealData.title}</Text>
            <Image style={styles.image} source={{ uri: mealData.imageUrl }} />

            <Subtitle>Ingredients</Subtitle>
            <View style={{ alignItems: 'center' }}>
                <List data={mealData.ingredients} />
            </View>

            <Subtitle>Steps</Subtitle>
            <CountList data={mealData.steps} />
        </ScrollView>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
    },
    image: {
        height: 100,
        width: '100%',
        borderRadius: 5,
    },
    title: {
        fontSize: 21,
        //margin: 4,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderBottomColor: Colors.orange,
        borderBottomWidth: 3,
        marginBottom: 3,
    },
    whiteText: {
        color: 'white',
    },
    allergens: {
        flexDirection: 'row',
        flex: 1,
        padding: 4,
    }
});