import { TouchableOpacity, Text, StyleSheet } from "react-native"

export default function DiceButton({dice, rollDice}){
    return( 
        <TouchableOpacity onPress={rollDice} style={styles.button}>
            <Text style={styles.text}> {dice} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 8,
        width: 60,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
})