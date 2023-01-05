import { ScrollView, FlatList } from 'react-native';
import { CATEGORIES } from '../data/data';
import CatGridTitle from '../components/CatGridTile';

function renderCatItem(itemData) {
    return <CatGridTitle title={itemData.item.title} color={itemData.item.color} />;
}

function Categories() {
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