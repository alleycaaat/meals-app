import { View, Pressable, Text, StyleSheet } from 'react-native';

function CatGridTitle({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={styles.button}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CatGridTitle;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        //overflow: 'hidden'
    },
    button: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});