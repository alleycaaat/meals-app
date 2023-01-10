import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../utils/Colors';

function MealItem({ data }) {
    const navigation = useNavigation();
    function onPressHandler() {
        navigation.navigate('MealDetails', {
            mealId: data.id
        });
    }
    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: Colors.medOrange }}
                onPress={onPressHandler}
            >
                <View>
                    <Image source={{ uri: data.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{data.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>Complexity: {data.complexity}</Text>
                    <Text style={styles.detailsItem}>Cost: {data.affordability}</Text>
                    <Text style={styles.detailsItem}>Time: {data.duration}min</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>Vegetarian</Text>
                    <Text style={styles.detailData}>{data.isVegetarian === true ? 'Yes' : 'No'}</Text>
                    <Text style={styles.detailsItem}>Vegan</Text>
                    <Text style={styles.detailData}>{data.isVegan === true ? 'Yes' : 'No'}</Text>
                    <Text style={styles.detailsItem}>GF</Text>
                    <Text style={styles.detailData}>{data.isGlutenFree === true ? 'Yes' : 'No'}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        borderRadius: 18,
        backgroundColor: 'white',
        overflow: 'hidden',
        elevation: 4,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 4,
    },
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4,
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12,
        fontWeight: 'bold',
    },
    detailData: {
        marginLeft: 2,
        marginRight: 4,
        fontSize: 12,
        color: Colors.darkBlue,
    }
});