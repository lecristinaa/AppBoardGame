import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    resultContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 45,
    },
    historyItem: {
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    diceContainer: {
        width: '100%',
        paddingHorizontal: 15,
        paddingBottom: 50,
        justifyContent: 'flex-end',
    },
    backgroundRectangle: {
        width: '100%',
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        padding: 10,
        marginBottom: -30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
})