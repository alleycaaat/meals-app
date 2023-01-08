import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { MEALS } from '../data/data';

import List from '../components/MealDetail/List';
import CountList from '../components/MealDetail/CountList';
import Subtitle from '../components/MealDetail/Subtitle';

import Colors from '../utils/Colors';

function MealDetails({ route }) {
    const data = route.params.mealId;

    const mealData = MEALS.find((meal) => meal.id === data);

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

            <View style={styles.allergens}>
                <Text>Vegan: {mealData.isVegan}.toString()</Text>
                <Text>{mealData.affordability}</Text>
                <Text>{mealData.isLactoseFree}</Text>
                <Text>{mealData.isGlutenFree}</Text>
            </View>
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
        fontSize: 20,
        //margin: 4,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderBottomColor: Colors.darkBlue,
        borderBottomWidth: 3,
        marginBottom: 3,
    },


    allergens: {
        flexDirection: 'row',
        flex: 1,
        padding: 4,
    }
});