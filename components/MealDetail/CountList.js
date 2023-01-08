import { Text, StyleSheet } from 'react-native';

function CountList({ data }) {
    return data.map((ing, i) => (
        <Text style={styles.details} key={i}>{i + 1}. {ing}</Text>
    ));
}

export default CountList;

const styles = StyleSheet.create({
    details: {
        fontSize: 18,
        color: 'white',
        marginVertical: 2,
        marginHorizontal: 22,
    },
});