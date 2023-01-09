import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/data';

import List from '../components/MealDetail/List';
import CountList from '../components/MealDetail/CountList';
import Subtitle from '../components/MealDetail/Subtitle';
import IconButton from '../components/IconButton';

import Colors from '../utils/Colors';

function MealDetails({ route, navigation }) {
    const data = route.params.mealId;
    const mealData = MEALS.find((meal) => meal.id === data);

    function headerBtn() {

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={headerBtn} color='white' icon='star' />;
            }
        });
    }, [navigation, headerBtn]);

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