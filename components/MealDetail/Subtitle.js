import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

function Subtitle({ children }) {
    return (
        <View style={styles.subtitle} >
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        backgroundColor: Colors.medOrange,
        marginVertical: 4,
        padding: 4,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});