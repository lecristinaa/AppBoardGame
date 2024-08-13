import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function DiceButton({dice, rollDice}){
    return( 
        <TouchableOpacity onPress={rollDice} style={styles.button}>
            <Text> {dice} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: '20%',
        maxWidth: 72,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderRadius: 16,
        flex: 1,
        justifyContent: center,
        alignItems: center
    }
})