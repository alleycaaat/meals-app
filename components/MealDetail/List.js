import { Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

function List({ data }) {
    return data.map((ing, i) => (
        <Text style={styles.details} key={i}>• {ing}</Text>
    ));
}

export default List;

const styles = StyleSheet.create({
    details: {
        fontSize: 18,
        backgroundColor: Colors.medOrange,
        textAlign: 'center',
        borderRadius: 5,
        color: 'white',
        marginVertical: 3,
        marginHorizontal: 22,
        width: '80%',
        padding: 4,
    },
});