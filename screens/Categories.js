import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/data';
import CatGridTitle from '../components/CatGridTile';

function Categories({ navigation }) {
    function renderCatItem(itemData) {
        function onPressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
        return (
            <CatGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={onPressHandler}
            />
        );
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCatItem}
            numColumns={2}
        />
    );
}

export default Categories;