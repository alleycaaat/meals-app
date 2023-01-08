import { Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

function Subtitle({ text }) {
    return (
        <Text style={styles.subtitle}>{text}</Text>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: Colors.darkBlue,
        padding: 4,
    },
});